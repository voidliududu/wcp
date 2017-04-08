<?php

/**
 * Created by PhpStorm.
 * User: liududu
 * Date: 17-4-1
 * Time: 下午8:50
 */
class Product
{
    private static $_instance = null;
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
    public function add($store,array $array)
    {
        $id = $this->con->Insert('productinfo',$array)->LastId();
        $stu = Store::getInstance();
        $flag = $stu->change($store,array('productinfo' => $id));
        return $flag;
    }
    public function change($id, array $array)
    {
        $flag = $this->con->Update('productinfo',$array)->Where('iid=?',$id)->Execute();
        return $flag;
    }
    public function delete($id)
    {
        $flag = $this->con->Update('productinfo',array('isdelete' => 1))->Where('iid = ?',$id)->AffectedRows();
        if($flag == 1){
            return true;
        }else{
            return false;
        }
    }
    public function get($id){
        $res = $this->con->Select('productinfo')->Where('iid = ? and isdelete = 0',$id);
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