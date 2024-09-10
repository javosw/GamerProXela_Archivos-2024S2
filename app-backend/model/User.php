<?php

class User{
    public $nombre;
    public $rol;

    public function __construct($nombre,$rol) {
        $this->nombre = $nombre;
        $this->rol = $rol;
    }

}

