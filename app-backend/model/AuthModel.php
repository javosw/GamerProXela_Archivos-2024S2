<?php

class AuthModel{
    public static function getUser($user,$pass){
        // USAR-> $name = $user->name ?? 'Unknown';
        if($user=='josq') return new User('josq','administracion','ADMIN');
        if($user=='oswaldo') return new User('bod','bodega','NombreBodeguero');
        if($user=='oswaldo') return new User('inv','inventario','NombreInventarista');
        if($user=='oswaldo') return new User('caj','caja','NombreCajero');

        throw new Exception('USUARIO NO EXISTE');
    }
}
