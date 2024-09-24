<?php
require_once __DIR__.'/../model/admin.model.php';

if (preg_match('/^\/gpx\/empleados\/add/', $uri)) {

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {

        AdminModel::addEmpleado(
            $json_body->dpi,
            $json_body->nombre,
            $json_body->sucursal,
            $json_body->rol,
            $json_body->username,
            $json_body->password
        );
        exit;
    }
} 
else if (preg_match('/^\/gpx\/empleados/', $uri)){

    if ($_SERVER['REQUEST_METHOD'] == 'GET') {

        AdminModel::getEmpleados();
        exit;
    }
}
