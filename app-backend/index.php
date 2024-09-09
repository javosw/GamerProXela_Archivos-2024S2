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


if(preg_match('/^\/gpx\/entrar/', $uri)) {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
    //header('Access-Control-Allow-Headers: Content-Type, Authorization');
    header('Access-Control-Allow-Headers: *');
    
    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        header("Content-Type: application/json");

        if(!empty($_POST['user']) && !empty($_POST['password'])){
            $user_info = '"tipo":"POST-OK","rol":"adminXXXX"';
            echo json_encode($user_info);
            exit;
        }

        // leer un json
        // json_decode($body, true) para array
        // json_decode($body) para objetos

        $body = file_get_contents('php://input');
        $es_array = true;
        if($es_array){
            $json_body = json_decode($body, true);
            $user = $json_body['user'];
            $user_info = '{"user":"'.$user.'","rol":"ARRAY"}';
            echo $user_info;

            //echo json_encode($json_body);
            exit;
        }
        else{
            $json_body = json_decode($body);
            $user = $json_body->user;
            $user_info = '{"user":"'.$user.'","rol":"OBJECT"}';
            echo $user_info;

            //$password = $json_body['password'];
            //siii $user_info = '{"user":"YOOOOOOOOO","rol":"PASSSSS"}';
            //echo json_encode($user_info);
            exit;
        }

        //$jsonData = array('nombre' => 'josq', 'rol' => 'admin');
    }
    else if($_SERVER['REQUEST_METHOD'] == 'OPTIONS'){

    }
}
/*
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
}*/
else {
    http_response_code(404);
}
