<?php


class AdminModel{
    
    public static function addEmpleado($dpi, $nombre, $sucursal, $rol, $username, $password)
    {
        require_once __DIR__.'/MiConexion.php';

        $my_pdo = CustomPDO::paraAdmin();

        try {
            $my_pdo->beginTransaction();

            $query = 'SELECT administracion.insertar_empleado(:dpi, :nombre, :sucursal, :rol, :username, :password)';
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