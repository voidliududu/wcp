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
check_login();
if(!isset($_GET['m'])){
    fail();
}
switch ($_GET['m']){
    case 1:
        $info = getCateInfo();
        $cate = Cate::getInstance();
        $cate->add($info) or fail();
        break;
    case 2:
        $info = getCateInfo();
        $id = $_GET['id'] or fail();
        $cate =Cate::getInstance();
        $cate->change($id,$info) or fail();
        break;
    case 3:
        $id = $_GET['id'] or fail();
        $cate = Cate::getInstance();
        $cate->delete($id) or fail();
        break;
        //TODO 记得返回数据
    case 4:
        $cate = Cate::getInstance();
        if(isset($_GET['id'])) {
            $id = $_GET['id'];
            if (!isset($_GET['num'])) {
                echo json_encode($cate->get($id));
            } else {
                $num = $_GET['num'];
                echo json_encode($cate->get($id, $num));
            }
        }else{
            echo json_encode($cate->get());
        }
        break;
    default:
        $cate = Cate::getInstance();
        var_dump($cate->get());
}
