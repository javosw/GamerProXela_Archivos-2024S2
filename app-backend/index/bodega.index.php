<?php

require_once __DIR__.'/../model/bodega.model.php';

if (preg_match('/^\/gpx\/productos\/add/', $uri)) {
    
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        BodegaModel::addProducto(
            $json_body->barcode,
            $json_body->nombre,
            $json_body->en_bodega,
            $json_body->precio
        );
    }
    exit;
}
