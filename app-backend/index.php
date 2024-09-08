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
if(preg_match('/^\/holaMundo\/hola/', $uri)) {
    require_once $aqui.'\view\global\hola.php';
}
else if(preg_match('/^\/holaMundo\/jugadores\/add/', $uri)) {
    require_once $aqui.'\controller\JugadoresController.php';

    if(!empty($_POST['dorsal']) && !empty($_POST['nit']) && !empty($_POST['nombre']) && !empty($_POST['nacimiento'])){
        JugadoresController::addJugador($_POST['dorsal'],$_POST['nit'],$_POST['nombre'],$_POST['nacimiento']);
    }
    else {
        JugadoresController::formAddJugador();
    }
}
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
}
else {
    http_response_code(404);
    require_once $aqui.'\view\global\errores.php';
}
