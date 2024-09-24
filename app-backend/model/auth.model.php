<?php

class AuthModel{

    public static function getUser($username,$password){
        require_once __DIR__.'/MiConexion.php';

        $my_pdo = CustomPDO::paraAdmin();

        try {
            $my_pdo->beginTransaction();

            //dpi | nombre | id_sucursal | rol | username | password
            $query = "SELECT * FROM administracion.empleados WHERE username=:username AND password=:password";
            $stmt = $my_pdo->prepare($query);
            $stmt->bindParam(':username',$username);
            $stmt->bindParam(':password',$password);

            if(!$stmt->execute()) { throw new Exception(); }

            $row = $stmt->fetch();

            $empleado = array(
                "username" => $row['username'],
                "rol"      => $row['rol'],
                "nombre"   => $row['nombre'],
                'sucursal' => $row['id_sucursal']
            );

            $my_pdo->commit();

            return $empleado;
        } 
        catch (Exception $e) {
            $my_pdo->rollBack();
        }
        finally{
            $my_pdo = null;
        }

    }
}
