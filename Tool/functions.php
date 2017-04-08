<?php
/**
 * Created by PhpStorm.
 * User: liududu
 * Date: 17-3-30
 * Time: 上午10:54
 */
function check_login()
{
    session_start();
    if(isset($_SESSION['login']) and $_SESSION['login'] == 1){
        return true;
    }else{
        //header();
    }
}
function check_token()
{
    if(isset($_POST['password']) and $_POST['password'] == PSW){
        return true;
    }else{
        exit;
    }
}
function fail()
{
    header('Location: '.WEBROOT.'/admin.php');
}
function getCateInfo()
{
    if(isset($HTTP_POST_FILES['img'])){
        $file = &$HTTP_POST_FILES['img'];
        if(MAX_FILE_SIZE < $file['size']){
            die('文件太大');
        }
        if(!in_array($file['type'],UPTYPES['img'])){
            die('文件类型非法');
        }
        $filename = $file['tmp_name'];
        $filesize = getimagesize($filename);
        $pinfo = pathinfo($file['name']);
        $ftype = $pinfo['extension'];
    }
    isset($_POST['name'])?($name = $_POST['name']):fail();
    isset($_POST['info'])?($cateinfo = $_POST['info']):fail();
    isset($_POST['img'])?($cateimg = $_POST['img']):fail();
    $time = time();
    return array(
        'catename'    =>   $name,
        'cateinfo'=>   $cateinfo,
        'cateimg' =>   $cateimg,
        'time'    =>   $time
    );
}
function getDepartment()
{
    isset($_POST['name'])?($deptname = $_POST['name']):fail();
    isset($_POST['brand'])?($brand = $_POST['brand']):fail();
    isset($_POST['updept'])?($updept = $_POST['updept']):$updept = null;
    $time = time();
    return array(
        'deptname'    =>    $deptname,
        'brand'       =>    $brand,
        'updept'      =>    $updept,
        'time'        =>    $time
    );
}
function getDeptInfo()
{
    isset($_POST['content'])?($content = $_POST['content']):fail();
    isset($_POST['author'])?($author= $_POST['author']):fail();
    isset($_POST['from'])?($fromwhere= $_POST['from']):fail();
    $time = time();
    return array(
        'content'     =>    $content,
        'author'      =>    $author,
        'fromwhere'   =>    $fromwhere,
        'time'        =>    $time
    );
}
function getProduct()
{

    isset($_POST['name'])?($pname= $_POST['name']):fail();
    isset($_POST['cate'])?($pcate = $_POST['cate']):fail();
    isset($_POST['from'])?($pfrom= $_POST['from']):fail();
    $time = time();
    return array(
        'pname'    =>    $pname,
        'pcate'    =>    $pname,
        'pfrom'    =>    $pfrom,
        'time'     =>    $time
    );
}
function getProInfo()
{
    isset($_POST['content'])?($content= $_POST['content']):fail();
    isset($_POST['author'])?($author= $_POST['author']):fail();
    isset($_POST['img'])?($img= $_POST['img']):fail();
    $time = time();
    return array(
        'content'  =>    $content,
        'author'   =>    $author,
        'img'      =>    $img,
        'time'     =>    $time
    );

}