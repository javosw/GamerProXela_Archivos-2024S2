<?php

class AdminController{
    public static function addEmpleado($dpi, $nombre) {
        require_once __DIR__ . '/../model/AdminModel.php';

        if(AdminModel::addEmpleado($dpi, $nombre)){
            header('HTTP/1.1 201 JOSQ');
            echo '{"JOSQ":"HECHO"}';
            exit;
        }
        else{
            header('HTTP/1.1 400 JOSQ');
            echo '{"JOSQ":"ERROR"}';
            exit;
        }
    }
}


