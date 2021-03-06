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
    public function getById($id=null,$num=1)
    {
        if($id) {
            $res = $this->con->Select('product')->Where('pid >= ? and isdelete = 0', $id)->Limit($num)->FetchAll();
        }else{
            $res = $this->con->Select('product')->Where('isdelete = 0')->Limit(5)->FetchAll();
        }
        if(!empty($res)){
            return $res;
        }else{
            return false;
        }
    }
    public function getByCate($cateid,$num=1)
    {
        if($cateid){
            $res = $this->con->Select('product')->Where('pcate = ?',$cateid)->Limit($num)->FetchAll();
            if(!empty($res)){
                return $res;
            }else{
                return false;
            }
        }else{
            return false;
        }
    }
    public function getByDepart($deptid,$num=1)
    {
        if($deptid){
            $res = $this->con->Select('product')->Where('pfrom = ?',$deptid)->Limit($num)->FetchAll();
            if(!empty($res)){
                return $res;
            }else{
                return false;
            }
        }else{
            return false;
        }
    }
    public function connect(){
        return $this->con;
    }
}