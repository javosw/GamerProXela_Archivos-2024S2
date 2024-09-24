<?php
session_start();

// PARA RUTAS USAR SIEMPRE -> \\\\\

// Turn off all error reporting
error_reporting(0);

/*
echo '<pre>';
echo 'REQUEST_URI: '.$_SERVER["REQUEST_URI"].'<br/>';
echo 'QUERY_STRING: '.$_SERVER["QUERY_STRING"].'<br/>';
echo 'REQUEST_METHOD: '.$_SERVER["REQUEST_METHOD"].'<br/>';
echo 'SCRIPT_NAME: '.$_SERVER["SCRIPT_NAME"].'<br/>';
echo '</pre>';

["REQUEST_METHOD"]=>
string(3) "GET"
["QUERY_STRING"]=>
string(0) ""
["REQUEST_URI"]=>
string(24) "/holaMundo/sdfsdfsd/fsdf"
["SCRIPT_NAME"]=>
string(20) "/holaMundo/index.php"
*/


// if (preg_match('//', $uri)) {}


header("Content-Type: application/json");
// para preflight requests
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
//header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Access-Control-Allow-Headers: *');

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit;
}

// leer un json
// json_decode($body, true) para acceder con arrays
// json_decode($body) para acceder con objetos



/*
header('HTTP/1.1 200 @josq');
echo json_encode($user_data);

header('HTTP/1.1 401 @josq');
echo '{"http":"401"}';
*/
$uri = $_SERVER['REQUEST_URI'];

$raw_body = file_get_contents('php://input');
$json_body = json_decode($raw_body);

if (preg_match('/^\/gpx\/entrar/', $uri)) {
    require_once __DIR__ . '/controller/auth.controller.php';
    
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {

        AuthController::entrar($json_body->username, $json_body->password);
    }
    exit;
} 
else {
    if($_SESSION['rol'] == 'caja'){
        require_once __DIR__ . '/index/caja.index.php';
        exit;
    }
    else if($_SESSION['rol'] == 'bodega'){
        require_once __DIR__ . '/index/bodega.index.php';
        exit;
    }
    else if($_SESSION['rol'] == 'inventario'){
        require_once __DIR__ . '/index/invent.index.php';
        exit;
    }
    else if($_SESSION['rol'] == 'administracion'){
        require_once __DIR__ . '/index/admin.index.php';
        exit;
    }

    header('HTTP/1.1 401 @josq');
    echo '{"http":"401"}';        
}
