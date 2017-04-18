<?php
/**
 * Created by PhpStorm.
 * User: liududu
 * Date: 17-4-2
 * Time: 上午10:49
 */
/*$_GET['m'] = 2;
$_GET['n'] = 1;
$_GET['id'] = 4;
$_POST['name'] = '微电影工作站';
$_POST['brand'] = './www/ww';
$_POST['updept'] = '升华网';*/
/*$_POST['content'] = '这是微电影工作站的介绍';
$_POST['author'] = 'void';
$_POST['from'] = '升华网';*/
require_once '../include.php';
check_login();
if(!isset($_GET['m'])){
    //header();
}
switch ($_GET['m']){
    case 1:
        $info = getDepartment();
        $department = Studio::getInstance();
        $id = $department->add($info);
        $deptinfo = getDeptInfo();
        $dept= Department::getInstance();
        $dept->add($id,$deptinfo) or fail();
        echo json_encode(array('status' => 0));
        break;
    case 2:
        /*$info = getCateInfo();
        $id = $_GET['id'] or fail();
        $cate =Store::getInstance();
        $cate->change($id,$info) or fail();*/
        if(!isset($_GET['n'])){
            fail();
        }
        switch ($_GET['n']){
            case 1:                                //更改部门信息
                $info = getDepartment();
                $id = $_GET['id'] or fail();
                $department =Studio::getInstance();
                $inf = $department->get($id);
                $imgid = $inf[0]['brand'];
                $res = Resource::getInstance();
                $res->delete($imgid);
                $department->change($id,$info);
                echo json_encode(array('state' => 0));
                break;
            case 2:                                //更改部门介绍
                $info = getDeptInfo();
                $id = $_GET['id'] or fail();
                $deptinfo = Department::getInstance();
                $deptinfo->change($id,$info);
                echo json_encode(array('state' => 0));
                break;
            default:
                fail();
        }
        break;
    case 3:
        $id = $_GET['id'] or fail();
        $studio = Studio::getInstance();
        $studio->delete($id) or fail();
        break;
    //TODO 记得返回数据
    case 4:
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
    case 5:
        if(isset($_GET['deptid'])){
            $id = $_GET['deptid'];
            $depart = Department::getInstance();
            $info = $depart->get($id);
            echo json_encode($info);
        }else{
            echo false;
        }
        break;
    default:
        $studio = Studio::getInstance();
        echo $studio->get();
}
function getInfo($id=null,$num=1){
    $dept = Studio::getInstance();
    $res = Resource::getInstance();
    $infoarr = $dept->get($id,$num);
    foreach ($infoarr as &$info){
        $flag = $info['brand'];
        if($flag){
            $r = $res->get($flag);
            $info['brand'] = $r[0]['path'];
        }
    }
    return $infoarr;
}