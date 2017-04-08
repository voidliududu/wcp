<?php

/**
 * Created by PhpStorm.
 * User: liududu
 * Date: 17-4-2
 * Time: 上午11:17
 */
class Cate
{
    private static $_instance = null;
    private $con;
    function __construct()
    {
        $this->con = PDOHelper::getInstance();
    }
    public static function getInstance()
    {
        if(!(self::$_instance instanceof Cate)){
            self::$_instance = new Cate();
        }
        return self::$_instance;
    }
    public function add(array $array)
    {
        $this->con->Insert('category',$array)->Execute();
    }
    public function delete($id)
    {
        $flag = $this->con->Update('category',array('isdelete' => 1))->Where('cateid = ?',$id)->AffectedRows();
        if($flag == 1){
            return true;
        }else{
            return false;
        }
    }
    public function change($id,$array)
    {
        $flag = $this->con->Update('category',$array)->Where('cateid=?',$id)->AffectedRows();
        if($flag == 1){
            return true;
        }else{
            return false;
        }
    }
    public function get($id = null,$num = 1){
        if(!$id){
            $res = $this->con->Select('category')->Where('isdelete = 0')->Limit($num)->FetchAll();
        }else {
            $f = $id + $num;
            $res = $this->con->Select('category')->Where('cateid >= ? and cateid < ? and isdelete = 0', array($id,$f))->FetchAll();
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