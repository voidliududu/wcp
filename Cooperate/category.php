<?php
/**
 * Created by PhpStorm.
 * User: liududu
 * Date: 17-4-1
 * Time: 下午9:40
 */
/*
 * 通过测试
 * */
/*$_GET['m'] = 4;
$_GET['id'] = 7;*/
//require_once '../Tool/functions.php';
require_once '../include.php';
check_login();
if(!isset($_GET['m'])){
    fail();
}
switch ($_GET['m']){
    case 1:
        $info = getCateInfo();
        $cate = Cate::getInstance();
        $cate->add($info) or fail();
        echo json_encode(array('state' => 0));
        break;
    case 2:
        $info = getCateInfo();
        var_dump($info);
        $id = $_GET['id'] or fail();
        $cate =Cate::getInstance();
        $inf = $cate->get($id);
        $imgid = $inf[0]['cateimg'];
        $res = Resource::getInstance();
        $res->delete($imgid);
        $cate->change($id,$info) or fail();
        echo json_encode(array('state' => 0));
        break;
    case 3:
        $id = $_GET['id'] or fail();
        $cate = Cate::getInstance();
        $info = $cate->get($id);
        $imgid = $info[0]['cateimg'];
        $res = Resource::getInstance();
        $res->delete($imgid);
        $cate->delete($id) or fail();
        break;
        //TODO 记得返回数据
    case 4:
        $cate = Cate::getInstance();
        if(isset($_GET['id'])) {
            $id = $_GET['id'];
            if (!isset($_GET['num'])) {
                echo json_encode(getInfo($id));
            } else {
                $num = $_GET['num'];
                echo json_encode(getInfo($id,$num));
            }
        }else{
            echo json_encode(getInfo());
        }
        break;
    default:
        echo json_encode(getInfo(1,10));
}
function getInfo($id=null,$num=1){
    $cate = Cate::getInstance();
    $res = Resource::getInstance();
    $infoarr = $cate->get($id,$num);
    foreach ($infoarr as &$info){
       $flag = $info['cateimg'];
       if($flag){
           $r = $res->get($flag);
           $info['cateimg'] = $r[0]['path'];
       }
    }
    return $infoarr;
}
