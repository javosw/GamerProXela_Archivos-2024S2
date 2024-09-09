<?php

class AuthController {

    public static function entrar($user,$password){
        require_once __DIR__.'/../model/AuthModel.php';
        if(AuthModel::checkCredenciales($user,$password)){
            session_start();
            // session_id()
            // session_destroy()
            // $_SESSION['id'] = session_id();
            $_SESSION['id_usuario'] = $user;

            $jsonData = array(
                'nombre' => 'josq',
                'rol' => 'admin'
            );
            echo json_encode($jsonData);

            // send {rol: "", nombre: ""} -> almacenarlo en un service en angular para que toda la app lo use
        }
    }

}
