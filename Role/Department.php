<?php

/**
 * Created by PhpStorm.
 * User: liududu
 * Date: 17-4-1
 * Time: 下午8:08
 */
class Department
{
    private static $_instance = null;
    private $con;
    function __construct()
    {
        $this->con = PDOHelper::getInstance();
    }
    public static function getInstance()
    {
        if(!(self::$_instance instanceof Department)){
            self::$_instance = new Department();
        }
        return self::$_instance;
    }
    public function add($studio,array $array)
    {
        $id = $this->con->Insert('deptinfo',$array)->LastId();
        $stu = Studio::getInstance();
        $flag = $stu->change($studio,array('infoid' => $id));
        return $flag;
    }
    public function change($id, array $array)
    {
        $flag = $this->con->Update('deptinfo',$array)->Where('iid=?',$id)->Execute();
        return $flag;
    }
    public function delete($id)
    {
        $flag = $this->con->Update('deptinfo',array('isdelete' => 1))->Where('iid = ?',$id)->AffectedRows();
        if($flag == 1){
            return true;
        }else{
            return false;
        }
    }
    public function get($id,$num){
        $res = $this->con->Select('deptinfo')->Where('iid = ? and isdelete = 0',$id);
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