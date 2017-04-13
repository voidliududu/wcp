<?php
/**
 * Created by PhpStorm.
 * User: liududu
 * Date: 17-4-3
 * Time: 下午12:51
 */
check_login();
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
                $store->change($id,$info);
                break;
            case 2:                                //更改产品介绍
                $info =getProInfo();
                $id = $_GET['id'];
                $product=Product::getInstance();
                $product->change($id,$info);
                break;
            default:
                fail();
        }
        break;
    case 3:
        $id = $_GET['id'] or fail();
        $product= Store::getInstance();
        $product->delete($id) or fail();
        break;
    //TODO 记得返回数据
    case 4:
        $id = $_GET['id'] or fail();
        $product=Store::getInstance();
        echo $product->get($id);
        break;
        //TODO 这里需要改
    default:
        $Store= Store::getInstance();
        echo $Store->get();
}