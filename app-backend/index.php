<?php

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

$uri = $_SERVER['REQUEST_URI'];

// if (preg_match('//', $uri)) {}
$aqui = __DIR__;

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

$raw_body = file_get_contents('php://input');
$json_body = json_decode($raw_body);

if (preg_match('/^\/gpx\/entrar/', $uri)) {

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {

        require_once $aqui . '\controller\AuthController.php';
        AuthController::entrar($json_body->username, $json_body->password);
    }
    exit;
} else if (preg_match('/^\/gpx\/admin\/empleados\/add/', $uri)) {
    require_once $aqui . '\model\AdminModel.php';

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {

        AdminModel::addEmpleado(
            $json_body->dpi,
            $json_body->nombre,
            $json_body->sucursal,
            $json_body->rol,
            $json_body->username,
            $json_body->password
        );
    }
    exit;
} 
else if (preg_match('/^\/gpx\/admin\/empleados/', $uri)){
    require_once $aqui . '\model\AdminModel.php';
    if ($_SERVER['REQUEST_METHOD'] == 'GET') {

        AdminModel::getEmpleados();
    }
    exit;
}
else {
    http_response_code(404);
}
