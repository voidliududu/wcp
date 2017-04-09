<?php

/**
 * Created by PhpStorm.
 * User: liududu
 * Date: 17-4-9
 * Time: 上午10:33
 */
class Resource
{
    private static $_instance = null;
    private $con;
    function __construct()
    {
        $this->con = PDOHelper::getInstance();
    }
    public static function getInstance()
    {
        if(!(self::$_instance instanceof Resource)){
            self::$_instance = new Resource();
        }
        return self::$_instance;
    }
    public function add(array $array)
    {
        return $this->con->Insert('resource',$array)->LastId();
    }
    public function delete($id)
    {
        $m = $this->con->Select('resource',array('path'))->Where('resid = ?',$id)->FetchRow();
        $filePath = FILE_ROOT.$m['path'];
        if(file_exists($filePath)){
            unlink($filePath);
        }
        $flag = $this->con->Update('resource',array('isdelete' => 1))->Where('resid = ?',$id)->AffectedRows();

        if($flag == 1){
            return true;
        }else{
            return false;
        }
    }
    public function get($id = null,$num = 1){
        if(!$id){
            $res = $this->con->Select('resource')->Where('isdelete = 0')->Limit($num)->FetchAll();
        }else {
            $f = $id + $num;
            $res = $this->con->Select('resource')->Where('resid >= ? and resid < ? and isdelete = 0', array($id,$f))->FetchAll();
        }
        if(!empty($res)){
            return $res;
        }else{
            return false;
        }
    }
}