<?php
/**
 * Created by PhpStorm.
 * User: liududu
 * Date: 17-3-30
 * Time: 下午12:54
 */
define('DBCONFIG',array(
    'host' => '127.0.0.1',
    'username' => 'root',
    'password' => 'liu19980526',
    'database' => 'wcp',
    'charset' => 'utf8',
    'prefix' => '',
    'persistent' => false,
    'debug'=>true
));
define('PSW','root');
define('WEBROOT','localhost');
define('UPLOAD_DIR',array(
    'img' => dirname($_SERVER['PHP_SELF']).'/Resource/uploadimg/'

));
define('UPTYPES',array(
    'img' =>array(
        'image/jpg',
        'image/jpeg',
        'image/png'
    ),
));
define('MAX_FILE_SIZE',1000000);
define('FILE_ROOT','/var/www/html');