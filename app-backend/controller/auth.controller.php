<?php

class AuthController
{
    private static function haEntrado() : bool {
        return isset($_SESSION['username']) && isset($_SESSION['nombre']) && 
        isset($_SESSION['rol']) && isset($_SESSION['sucursal']);
    }

    public static function entrar($username, $password)
    {
        if (self::haEntrado()) {

            $resp = array(
                'username' => $_SESSION['username'],
                'nombre' => $_SESSION['nombre'],
                'sucursal' => $_SESSION['sucursal'],
                'rol' => $_SESSION['rol']
            );

            header('HTTP/1.1 200 @auth.controller.php');
            echo json_encode($resp);
            exit;
        } 
        else {
            require_once __DIR__.'/../model/auth.model.php';

            try {
                $user_data = AuthModel::getUser($username, $password);

                $_SESSION['username'] = $user_data['username'];
                $_SESSION['nombre'] = $user_data['nombre'];
                $_SESSION['rol'] = $user_data['rol'];
                $_SESSION['sucursal'] = $user_data['id_sucursal'];

                header('HTTP/1.1 200 @auth.controller.php');
                echo json_encode($user_data);

                exit;
            } catch (\Throwable $th) {
                session_destroy();
                
                header('HTTP/1.1 401 @auth.controller.php');
                echo '{"http":"401","at":"auth.controller.php"}';
                // redireccionar o status=unautorized
                // otra opcion: llenar los campos faltantes

                exit;
            }
        }
    }

}


/*

    private static function entrado() {}
    private static function salir() {
        //session_set_cookie_params(10);
        // session_id()
        // session_destroy()
        // $_SESSION['id'] = session_id();
    }

*/