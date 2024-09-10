<?php

class AuthModel{
    public static function getUser($user,$pass){
        // USAR-> $name = $user->name ?? 'Unknown';
        if($user=='josq') return new User('josq','ADMIN+++');
        if($user=='javier') return new User('javier','ADMIN+');
        if($user=='oswaldo') return new User('oswaldo','ADMIN++');

        throw new Exception('USUARIO NO EXISTE');
    }
}
