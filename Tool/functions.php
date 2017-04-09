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
   /* echo __LINE__;
    header('Location: '.WEBROOT.'/admin.php');*/
}
function file_upload($name,$type){
    if(isset($_FILES[$name])){
        $file = &$_FILES[$name];
        if(MAX_FILE_SIZE < $file['size']){
            die(json_encode(array('state' => 100001)));       //文件太大
        }
        if(!in_array($file['type'],UPTYPES[$type])){
            die(json_encode(array('state' => 100002)));  //文件类型非法
        }
        $filename = $file['tmp_name'];
        $filesize = getimagesize($filename);
        $pinfo = pathinfo($file['name']);
        $ftype = $pinfo['extension'];
        $destination = UPLOAD_DIR['img'].sha1(time()*time()).'.'.$ftype;
        if(file_exists($destination)) {
            die(json_encode(array('state' => 100003)));  //die('同名文件已存在');
        }
        if(!move_uploaded_file($filename,FILE_ROOT.$destination)) {
            die(json_encode(array('state' => 100004)));  //die('移动文件出错');
        }else {
            $arr = array(
                'path' => $destination,
                'size' => $filesize,
                'type' => $ftype,
                'isdelete' => 0,
                'time' => time()
            );
            $res = Resource::getInstance();
            return $res->add($arr);
        }
    }else{
        return null;
    }
}

function getCateInfo()
{

    isset($_POST['name'])?($name = $_POST['name']):fail();
    isset($_POST['info'])?($cateinfo = $_POST['info']):fail();
    $cateimg = (int)file_upload('img','img');
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