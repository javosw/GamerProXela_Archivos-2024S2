<?php


class AdminModel{
    
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
            exit;
        }
    }

    public static function getEmpleados(){
        require_once __DIR__.'/MiConexion.php';

        $my_pdo = CustomPDO::paraAdmin();

        try {
            $my_pdo->beginTransaction();

            $query = 'SELECT * FROM administracion.empleados';
            $stmt = $my_pdo->prepare($query);
            
            if(!$stmt->execute()) { throw new Exception(); }

            //dpi | nombre | id_sucursal | rol | username | password
            $empleados = array();
            while ($row = $stmt->fetch()) {
                $empleados[] = array(
                    "dpi"       => $row['dpi'],
                    "nombre"    => $row['nombre'],
                    "sucursal"  => $row['id_sucursal'],
                    "rol"       => $row['rol'],
                    "username"  => $row['username']
                );
            }

            header('HTTP/1.1 200 @admin.model.php');
            echo json_encode($empleados);
            
            $my_pdo->commit();

            //echo json_encode($table,JSON_PRETTY_PRINT);

            //echo '{"http":"200"}';
        } 
        catch (\Throwable $th) {
            $my_pdo->rollBack();

            header('HTTP/1.1 400 @admin.model.php');
            echo '{"http":"400","at":"admin.model.php"}';
        }
        finally{
            $my_pdo = null;
            exit;
        }

    }

}