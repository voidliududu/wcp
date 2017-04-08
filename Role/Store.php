<?php

/**
 * Created by PhpStorm.
 * User: liududu
 * Date: 17-4-1
 * Time: 下午8:38
 */
class Store
{
    private static $_instance = null;
    private $con;
    function __construct()
    {
        $this->con = PDOHelper::getInstance();
    }
    public static function getInstance()
    {
        if(!(self::$_instance instanceof Store)){
            self::$_instance = new Store();
        }
        return self::$_instance;
    }
    public function add(array $array)
    {
        return $this->con->Insert('product',$array)->LastId();
    }
    public function change($id, array $array)
    {
        $flag = $this->con->Update('product',$array)->Where('pid=?',$id)->Execute();
        return $flag;
    }
    public function delete($id)
    {
        $flag = $this->con->Update('product',array('isdelete' => 1))->Where('pid = ?',$id)->AffectedRows();
        if($flag == 1){
            return true;
        }else{
            return false;
        }
    }
    public function get($id=null){
        if($id) {
            $res = $this->con->Select('product')->Where('pid = ? and isdelete = 0', $id)->FetchRow();
        }else{
            $res = $this->con->Select('product')->FetchAll();
        }
        if(!empty($res)){
            return $res;
        }else{
            return false;
        }
    }
    public function connect(){
        return $this->con;
    }
}