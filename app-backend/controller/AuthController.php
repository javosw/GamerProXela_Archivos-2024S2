<?php

class AuthController {
    public static function entrar($user,$password){
        require_once __DIR__.'/../model/AuthModel.php';
        if(AuthModel::checkAuth($user,$password)){
            session_start();
            // session_id()
            // session_destroy()
            // $_SESSION['id'] = session_id();
            $_SESSION['id_usuario'] = $user;
            header('HTTP/1.1 201 TODO BIEN');
            header("Content-Type: application/json");
            echo json_encode($$user);

            // send {rol: "", nombre: ""} -> almacenarlo en un service en angular para que toda la app lo use
        }
    }

}
