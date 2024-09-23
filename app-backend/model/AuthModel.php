<?php

class AuthModel{
    public static function getUser2($user,$pass){
        // USAR-> $name = $user->name ?? 'Unknown';
        if($user=='josq') return new User('josq','administracion','ADMIN');
        if($user=='oswaldo') return new User('bod','bodega','NombreBodeguero');
        if($user=='oswaldo') return new User('inv','inventario','NombreInventarista');
        if($user=='oswaldo') return new User('caj','caja','NombreCajero');

        throw new Exception('USUARIO NO EXISTE');
    }

    public static function getUser($username,$password){
        require_once __DIR__.'/MiConexion.php';

        $my_pdo = CustomPDO::paraAdmin();

        try {
            $my_pdo->beginTransaction();

            $query = "SELECT * FROM administracion.empleados WHERE username=:username AND password=:password";
            $stmt = $my_pdo->prepare($query);
            $stmt->bindParam(':username',$username);
            $stmt->bindParam(':password',$password);

            if(!$stmt->execute()) { throw new Exception(); }

            $empleado;
            while ($row = $stmt->fetch()) {
                $empleado = array(
                    "username" => $row['username'],
                    "rol"      => $row['rol'],
                    "nombre"   => $row['nombre'],
                );
            }
            $my_pdo->commit();

            return $empleado;
        } 
        catch (\Throwable $th) {
            $my_pdo->rollBack();

            header('HTTP/1.1 400 @josq');
            echo '{"http":"400"}';
        }
        finally{
            $my_pdo = null;
        }

    }


    public static function addEmpleado($dpi, $nombre, $sucursal, $rol, $username, $password)
    {
        require_once __DIR__.'/MiConexion.php';

        $my_pdo = CustomPDO::paraAdmin();

        try {
            $my_pdo->beginTransaction();

            $query = 'SELECT administracion.add_empleado(:dpi, :nombre, :sucursal, :rol, :username, :password)';
            $stmt = $my_pdo->prepare($query);
            $stmt->bindParam(':dpi',$dpi);
            $stmt->bindParam(':nombre',$nombre);
            $stmt->bindParam(':sucursal',$sucursal);
            $stmt->bindParam(':rol',$rol);
            $stmt->bindParam(':username',$username);
            $stmt->bindParam(':password',$password);
            
            if(!$stmt->execute()) { throw new Exception(); }

            $my_pdo->commit();
            header('HTTP/1.1 200 @josq');
            echo '{"http":"200"}';
        } 
        catch (\Throwable $th) {
            $my_pdo->rollBack();

            header('HTTP/1.1 400 @josq');
            echo '{"http":"400"}';
        }
        finally{
            $my_pdo = null;
        }
    }


}
