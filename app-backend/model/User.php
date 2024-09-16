<?php

class User{
    public $username;
    public $rol;
    public $nombre;

    public function __construct($username,$rol,$nombre) {
        $this->username = $username;
        $this->rol = $rol;
        $this->nombre = $nombre;
    }

}

