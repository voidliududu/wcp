<?php
/**
 * Created by PhpStorm.
 * User: liududu
 * Date: 17-4-3
 * Time: 下午12:51
 */
error_reporting(11);
require_once '../include.php';
//check_login();
if(!isset($_GET['m'])){
    //header();
}
switch ($_GET['m']){
    case 1:
        $info = getProduct();
        $Store = Store::getInstance();
        $id = $Store->add($info);
        $proinfo = getProInfo();
        $product= Product::getInstance();
        $product->add($id,$proinfo) or fail();
        echo json_encode(array('state' => 0));
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
            case 1:                                //更改产品信息
                $info = getProduct();
                $id = $_GET['id'];
                $store=Store::getInstance();
                $temp = $store->getById($id);
                $imgid = $temp[0]['pimg'];
                $res = Resource::getInstance();
                $res->delete($imgid);
                $store->change($id,$info);
                echo json_encode(array('state' => 0));
                break;
            case 2:                                //更改产品介绍
                $info =getProInfo();
                $id = $_GET['id'];
                $product=Product::getInstance();
                $product->change($id,$info);
                echo json_encode(array('state' => 0));
                break;
            default:
                fail();
        }
        break;
    case 3:
        $id = $_GET['id'] or fail();
        $product = Store::getInstance();
        $temp = $product->getById($id);
        $imgid = $temp[0]['pimg'];
        $res = Resource::getInstance();
        $res->delete($imgid);
        $product->delete($id) or fail();
        break;
    //TODO 记得返回数据
    case 4:
       /* $id = $_GET['id'] or fail();
        $product=Store::getInstance();
        echo $product->get($id);*/
        if(isset($_GET['t'])){
            switch ($_GET['t']){
                case 1:
                    $id = isset($_GET['c'])?$_GET['c']:1;
                    $num = isset($_GET['num'])?$_GET['num']:1;
                    echo json_encode(get('cate',$id,$num));
                    break;
                case 2:
                    $id = isset($_GET['c'])?$_GET['c']:1;
                    $num = isset($_GET['num'])?$_GET['num']:1;
                    echo json_encode(get('depart',$id,$num));
                    break;
                case 3:
                    $id = isset($_GET['c'])?$_GET['c']:1;
                    $num = isset($_GET['num'])?$_GET['num']:1;
                    echo json_encode(get('id',$id,$num));
                    break;
                default:
                    break;
            }
        }
        break;
        //TODO 这里需要改
    default:
        break;
}
function get($index,$id,$num=1)
{
    switch ($index){
        case 'cate':
            $product = Store::getInstance();
            $info = Product::getInstance();
            $res = Resource::getInstance();
            $pro = $product->getByCate($id,$num);
            if($pro){
                foreach($pro as $proi => &$proitem) {
                    $infoid = $proitem['pinfo'];
                    $imgid = $proitem['pimg'];
                    if($imgid){
                        $img = $res->get($imgid);
                        $proitem['pimg'] = $img[0]['path'];
                    }
                    $infoc = $info->get($infoid);
                    if ($infoc) {
                        $temp[] = array_merge($proitem, $infoc);
                    }
                }
                return isset($temp)?$temp:false;
            }else{
                return false;
            }
            break;
        case 'depart':
            $product = Store::getInstance();
            $info = Product::getInstance();
            $res = Resource::getInstance();
            $pro = $product->getByDepart($id,$num);
            if($pro){
                foreach($pro as $proi => $proitem) {
                    $infoid = $proitem['pinfo'];
                    $imgid = $proitem['pimg'];
                    $img = $res->get($imgid);
                    $infoc = $info->get($infoid);
                    $proitem['pimg'] = $img[0]['path'];
                    if ($infoc) {
                        $temp[] = array_merge($proitem, $infoc);
                    }
                }
                return isset($temp)?$temp:false;
            }else{
                return false;
            }
            break;
        case 'id':
            $product = Store::getInstance();
            $info = Product::getInstance();
            $res = Resource::getInstance();
            $pro = $product->getById($id,$num);
            if($pro){
                foreach($pro as $proi => $proitem) {
                    $infoid = $proitem['pinfo'];
                    $imgid = $proitem['pimg'];
                    $img = $res->get($imgid);
                    $infoc = $info->get($infoid);
                    $proitem['pimg'] = $img[0]['path'];
                    if ($infoc) {
                        $temp[] = array_merge($proitem, $infoc);
                    }
                }
                return isset($temp)?$temp:false;
            }else{
                return false;
            }
    }
}