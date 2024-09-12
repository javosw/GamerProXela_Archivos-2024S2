<?php

// PARA RUTAS USAR SIEMPRE -> \\\\\

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

if(preg_match('/^\/gpx\/entrar/', $uri)) {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
    //header('Access-Control-Allow-Headers: Content-Type, Authorization');
    header('Access-Control-Allow-Headers: *');

    if($_SERVER['REQUEST_METHOD'] == 'POST'){

        // leer un json
        // json_decode($body, true) para acceder con arrays
        // json_decode($body) para acceder con objetos

        $body = file_get_contents('php://input');
        $json_body = json_decode($body);

        require_once $aqui.'\controller\AuthController.php';
        AuthController::entrar($json_body->user,$json_body->pass);
        exit;
    }
    else if($_SERVER['REQUEST_METHOD'] == 'OPTIONS'){

    }
}
else if(preg_match('/^\/gpx\/admin\/empleados/', $uri)) {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
    //header('Access-Control-Allow-Headers: Content-Type, Authorization');
    header('Access-Control-Allow-Headers: *');

    require_once $aqui.'\controller\AdminController.php';

    // leer parametros usando $_GET['user'] es solo util para get, pero en post angular ignora los parametros en url
    if($_SERVER['REQUEST_METHOD'] == 'GET'){

        if(isset($_GET['dpi']) && isset($_GET['nombre'])){    
            AdminController::addEmpleado($_GET['dpi'],$_GET['nombre']);
        }
    }
}

/*
else if(preg_match('/^\/holaMundo\/jugadores/', $uri)) {
    require_once $aqui.'\controller\JugadoresController.php';
    JugadoresController::jugadores();
}
else if(preg_match('/^\/holaMundo\/partidos/', $uri)) {
    require_once $aqui.'\controller\PartidosController.php';

    if(!empty($_POST['competicion'])){
        PartidosController::partidosPorCompeticion($_POST['competicion']);
    }
    else {
        PartidosController::competiciones();
    }
}
else if(preg_match('/^\/holaMundo\/noticias/', $uri)) {
    require_once $aqui.'\controller\NoticiasController.php';
    NoticiasController::ultimasNoticias();
}
else if(preg_match('/^\/holaMundo\/api\/jugadores/', $uri)) {
    require_once $aqui.'\controller\JugadoresController.php';
    JugadoresController::jugadoresAPI();
}*/
else {
    http_response_code(404);
}
