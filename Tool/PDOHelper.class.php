<?php
/**
 * PDO链式调用的封装
 * 使用预处理方式真正防止SQL注入
 * 简化常用查询
 * 要使用PDO高级功能， 可以通过GetConnecttion()返回PDO对象自己实现
 * @author Paddy
 * @link http://www.oschina.net/code/snippet_2520641_52271
 * @version 1.1
 */
/*
USAGE:

	//实例化对象并传人数据库配置信息
	$db = new PDOHelper (array (
			'host' => '127.0.0.1',
			'username' => 'root',
			'password' => '',
			'database' => 'test',
			'charset' => 'utf8',
			'prefix' => '',
			'persistent' => false,
			'debug'=>true
	));

	//多行插入
	$db->Insert( 't', array (
			array (
					'cid' => $cid,
					'content' => "c1"
			),
			array (
					'cid' => $cid,
					'content' => "c2"
			)
	) )
	->Execute();

	//单行插入并获取id
	$id = $db->Insert( 't', array (
			'cid' => $cid,
			'content' => $content
	) )
	->LastId();

//查询1：最简查询
$result = $db->Select( 't' )->FetchAll();

	//查询2：带条件查询
	$result = $db->Select( 't', array (  'id', 'cid', 'content') )
	->Where( 'cid=? and id>?', array ($cid, $id) )
	->Order( 'id desc' )
	->Limit( 1 )
	->FetchRow();

//查询3：in用法
$where_data[] = $cid;
$ids = array(1,2,3);
$where_data += $ids;
$result = $db->Select( 't' )
->Where( 'cid=? and id in(?)', $where_data )
->FetchAll();

	//更新
	$count = $db->Update( 't', array (
			'id' => $id,
			'cid' => $cid,
			'content' => $content
	) )
	->Where( 'id=?', $id )
	->AffectedRows();

	//删除
	$count = $db->Delete( 't' )->Where( 'id=?', $id )->AffectedRows();

//sql语句查询
$result = $db->Sql( 'select * from `_t` where id>?', $id )->FetchAll();

//通过自定义来使用事务
$pdo = $db->GetConnecttion();
$pdo->beginTransaction();
...

*/

class PDOHelper
{
    protected static $_instance = null;
	protected $mConnecttion;                          //连接句柄
	protected $mPrefix;                               //前缀
	protected $mDebug;                                    //调试模式
	protected $mQueryType;                                    //请求类型
	protected $mSql;
	protected $mWhere;                                    //where链
	protected $mOrder;                                   //order链
	protected $mLimit;                  //Limit  clain
	protected $mData;                           //data
	protected $mPDOStatement;                           //PDOStatement

	/**
	 * 构造方法
	 *
	 * @param array $config
	 */
	function __construct($config)
	{
		$this->mDebug = empty($config['debug']) ? false : true;
		$this->mPrefix = isset($config['prefix']) ? $config['prefix'] : '';
		$dsn = 'mysql:host=' . $config['host'] . ';dbname=' . $config['database'];
		try {
			$this->mConnecttion = new PDO($dsn, $config['username'], $config['password'], array(
				PDO::ATTR_PERSISTENT => empty($config['persistent']) ? false : true
			));
		} catch (PDOException $e) {
			$this->Err('Connect failed<br/>');
		}
		if ($this->mConnecttion) {
			// $this->mConnecttion->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
			$this->mConnecttion->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
			$this->mConnecttion->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
			$charset = isset($config['charset']) ? $config['charset'] : 'utf8';
			// $charset = strtolower( str_replace( '-', '', $charset ) );
			// if (! in_array( $charset, array ('utf8','gbk') ))
			// {
			//     $charset = 'utf8';
			// }
			$this->mConnecttion->exec("SET NAMES $charset");
		}
	}
	/*
	 * 单例实现
	 * */
	public static function getInstance()
    {
        if(!(self::$_instance instanceof PDOHelper)){
            self::$_instance = new PDOHelper(DBCONFIG);
        }
        return self::$_instance;
    }

	/**
	 * 获取PDO实例，以便自己实现复杂查询
	 *
	 * @return PDO
	 */
	function GetConnecttion()
	{
		return $this->mConnecttion;
	}

	/**
	 * 初始化链式调用的缓存
	 */
	private function Init()
	{
		$this->mQueryType = '';
		$this->mSql = '';
		$this->mWhere = '';
		$this->mOrder = '';
		$this->mLimit = '';
		$this->mData = array();
	}

	/**
	 * 查询链Select部分
	 *
	 * @param string $table
	 * @param string|array $field
	 * @return PDOHelper
	 */
	function Select($table, $field = '*')
	{
		$this->Init();
		$this->mQueryType = 's';
		$field_str = is_array($field) ? '`' . implode('`,`', $field) . '`' : $field;
		$this->mSql = 'SELECT ' . $field_str . ' FROM `' . $this->mPrefix . $table . '`';
		return $this;
	}

	/**
	 * 查询链Insert部分
	 *
	 * @param string $table
	 * @param array $data
	 * @return PDOHelper
	 */
	function Insert($table, $data)
	{
		$this->Init();
		$first = current($data);
		if (is_array($first)) {
			// 多行插入
			$fields = array_keys($first);
			$values = substr(str_repeat('?,', count($fields)), 0, -1);
			$values_all = substr(str_repeat('(' . $values . '),', count($data)), 0, -1);
			$this->mSql = 'INSERT INTO `' . $this->mPrefix . $table . '`(`' . implode('`,`', $fields) . '`) VALUES' . $values_all;
			foreach ($this->mData as $item) {
				$this->mData += $item;
			}
		} else {
			// 单行插入
			$fields = array_keys($data);
			$values = substr(str_repeat('?,', count($fields)), 0, -1);
			$this->mSql = 'INSERT INTO `' . $this->mPrefix . $table . '`(`' . implode('`,`', $fields) . '`) VALUES(' . $values . ')';
			$this->mData = $data;
		}
		return $this;
	}

	/**
	 * 查询链Update部分
	 *
	 * @param string $table
	 * @param array $data
	 * @return PDOHelper
	 */
	function Update($table, $data)
	{
		$this->Init();
		$this->mQueryType = 'u';
		$fields = array_keys($data);
		$this->mSql = 'UPDATE `' . $this->mPrefix . $table . '` SET ' . implode('=?,', $fields) . '=?';
		$this->mData = $data;
		return $this;
	}

	/**
	 * 查询链Delete部分
	 *
	 * @param string $table
	 * @return PDOHelper
	 */
	function Delete($table)
	{
		$this->Init();
		$this->mQueryType = 'd';
		$this->mSql = 'DELETE FROM `' . $this->mPrefix . $table . '`';
		return $this;
	}

	/**
	 * 查询链Where部分
	 *
	 * @param string $str
	 * @param mixed $parameter
	 * @return PDOHelper
	 */
	function Where($str, $parameter = null)
	{
		if ($parameter !== null) {
			if (is_array($parameter)) {
				$this->mData += $parameter;
				// 根据实际传递的参数数目，替换in语句中的？，只能有一个in语句
				$c1 = substr_count($str, '?');
				$c2 = count($parameter);
				$replace = 'in(' . substr(str_repeat('?,', $c2 - $c1 + 1), 0, -1) . ')';
				$str = str_replace('in(?)', $replace, $str);
			} else {
				$this->mData[] = $parameter;
			}
		}
		$this->mWhere = " WHERE $str";
		return $this;
	}

	/**
	 * 查询链Order部分
	 *
	 * @param string $str
	 * @return PDOHelper
	 */
	function Order($str)
	{
		$this->mOrder = " ORDER BY $str";
		return $this;
	}

	/**
	 * 查询链Limit部分
	 *
	 * @param number $length
	 * @param number $begin
	 * @return PDOHelper
	 */
	function Limit($length = 10, $begin = 0)
	{
		$this->mLimit = " LIMIT $begin,$length";
		return $this;
	}

	/**
	 * 直接Sql语句查询
	 *
	 * @param string $sql
	 * @param mixed $parameter
	 * @return PDOHelper
	 */
	function Sql($sql, $parameter = null)
	{
		$this->Init();
		if ($parameter !== null) {
			if (is_array($parameter)) {
				$this->mData = $parameter;
				// 根据实际传递的参数数目，替换in语句中的？，只能有一个in语句
				$c1 = substr_count($sql, '?');
				$c2 = count($parameter);
				$replace = 'in(' . substr(str_repeat('?,', $c2 - $c1 + 1), 0, -1) . ')';
				$sql = str_replace('in(?)', $replace, $sql);
			} else {
				$this->mData[] = $parameter;
			}
		}
		// 自动为表名加前缀，需要时，请在表名前面加下划线并用反单引号括起来
		$sql = str_replace('`_', '`' . $this->mPrefix, $sql);
		$this->mSql = $sql;
		return $this;
	}

	/**
	 * 执行查询
	 *
	 * @return boolean
	 */
	function Execute()
	{
		if ($this->mConnecttion) {
			switch ($this->mQueryType) {
				case 's' :
					$this->mSql .= $this->mWhere . $this->mOrder . $this->mLimit;
					break;
				case 'u' :
					$this->mSql .= $this->mWhere;
					break;
				case 'd' :
					$this->mSql .= $this->mWhere;
					break;
			}
			//var_dump( $this->mSql );
			//echo '<br/>';
			if (empty($this->mSql)) {
				$this->Err('Can not find SQL statement<br/>');
				return false;
			}
			if ($this->mPDOStatement = $this->mConnecttion->prepare($this->mSql)) {
				$i = 1;
				foreach ($this->mData as $data) {
					// echo "<<$i:$data>><br/>";
					if (!$this->mPDOStatement->bindValue($i, $data)) {
						$this->Err('Error: PDOStatement::bindValue() ' . $i . '/' . count($this->mData) . '<br/>');
						return false;
					}
					++$i;
				}
				if ($this->mPDOStatement->execute()) {
					return true;
				}
				$this->Err('Error: PDOStatement::execute()<br/>');
				return false;
			}
			$this->Err('Error: PDOStatement::prepare()<br/>');
		}
		return false;
	}

	/**
	 * 返回数据列表的二维关联数组
	 *
	 * @return array(array{}) | empty array | false
	 */
	function FetchAll()
	{
		if ($this->Execute()) {
			return $this->mPDOStatement->fetchAll();
		} else {
			return false;
		}
	}

	/**
	 * 返回数据行的一维关联数组
	 *
	 * @return array{} | empty array | false
	 */
	function FetchRow()
	{
		if ($this->Execute()) {
			$rs = $this->mPDOStatement->fetch();
			return $rs === false ? array() : $rs;
		} else {
			return false;
		}
	}

	/**
	 * 返回第1行第1列的值
	 *
	 * @return mixed | false
	 */
	function FetchCell()
	{
		if ($this->Execute()) {
			$rs = $this->mPDOStatement->fetchColumn();
			return $rs === false ? null : $rs;
		} else {
			return false;
		}
	}

	/**
	 * 返回插入数据的id
	 *
	 * @return string boolean
	 */
	function LastId()
	{
		if ($this->Execute()) {
			return $this->mConnecttion->lastInsertId();
		} else {
			return false;
		}
	}

	/**
	 * 返回实际受影响的行数
	 *
	 * @return number boolean
	 */
	function AffectedRows()
	{
		if ($this->Execute()) {
			return $this->mPDOStatement->rowCount();
		} else {
			return false;
		}
	}

	/**
	 * 调试模式下，显示错误信息
	 *
	 * @param string $msg
	 */
	private function Err($msg)
	{
		if ($this->mDebug) {
			echo $msg;
		}
	}
}
