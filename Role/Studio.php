<?php

/**
 * Created by PhpStorm.
 * User: liududu
 * Date: 17-3-30
 * Time: 上午11:18
 */
class Studio
{   private static $_instance = null;
    private $con;
    function __construct()
    {
        $this->con = PDOHelper::getInstance();
    }
    public static function getInstance()
    {
        if(!(self::$_instance instanceof Studio)){
            self::$_instance = new Studio();
        }
        return self::$_instance;
    }
    public function add(array $array)
    {
        return $this->con->Insert('department',$array)->LastId();
    }
    public function delete($id)
    {
        $flag = $this->con->Update('department',array('isdelete' => 1))->Where('deptid = ?',$id)->AffectedRows();
        return ($flag)?($flag):false;
    }
    public function change($id,$array)
    {
        $flag = $this->con->Update('department',$array)->Where('deptid=?',$id)->AffectedRows();
        if($flag == 1){
            return true;
        }else{
            return false;
        }
    }
    public function get($id = NULL,$num = 1)
    {
        if ($id != NULL) {
            $f = $id + $num;
            $res = $this->con->Select('department')->Where('deptid >= ? and deptid < ? and isdelete = 0', array($id,$f))->FetchAll();
        } else {
            $res = $this->con->Select('department')->FetchAll();
        }
        if (!empty($res)) {
            return $res;
        } else {
            return false;
        }

    }
    public function connect(){
        return $this->con;
    }
}