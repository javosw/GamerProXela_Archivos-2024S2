<?php

class AuthController
{
    private static function entrado() {}
    private static function salir() {
        //session_set_cookie_params(10);
        // session_id()
        // session_destroy()
        // $_SESSION['id'] = session_id();
    }

    private static function haEntrado() : bool {
        return isset($_SESSION['user']) && isset($_SESSION['nombre']) && isset($_SESSION['rol']);
    }

    public static function entrar($user, $pass)
    {
        session_start();

        if (self::haEntrado()) {

            $resp = array(
                'user' => $_SESSION['user'],
                'nombre' => $_SESSION['nombre'],
                'rol' => $_SESSION['rol']
            );

            echo json_encode($resp);
            exit;

            // si algun parametro falta se verifica que el user&pass sean correctos
            // si asi es: rellenar los parametros faltantes
            // sino: terminar la sesion
        } 
        else {
            // AQUI SE INTENTA CREAR UNA SESSION
            require_once __DIR__ . '/../model/AuthModel.php';
            require_once __DIR__ . '/../model/User.php';

            try {
                $user_data = AuthModel::getUser($user, $pass);

                $_SESSION['user'] = $user;
                $_SESSION['nombre'] = $user_data->nombre;
                $_SESSION['rol'] = $user_data->rol;

                $resp = array(
                    'user' => $_SESSION['user'],
                    'nombre' => $_SESSION['nombre'],
                    'rol' => $_SESSION['rol']
                );

                echo json_encode($resp);
                exit;
            } catch (\Throwable $th) {
                session_destroy();
                header('HTTP/1.1 404 ERRORAZO');
                echo '{"status":"SIN_AUTH"}';
                // redireccionar o status=unautorized
                // otra opcion: llenar los campos faltantes

                exit;
            }
        }
    }
}
