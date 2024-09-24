<?php


class BodegaModel{
    
    public static function addProducto($barcode,$nombre,$en_bodega,$precio)
    {
        require_once __DIR__.'/MiConexion.php';

        session_start();

        $my_pdo = CustomPDO::paraBodega();

        try {
            $my_pdo->beginTransaction();
            // id_producto | id_sucursal |  
            // nombre | precio |
            // unidades_vendidas | unidades_bodega |
            // unidades_pasillo | id_pasillo
            $query = 'INSERT INTO inventario.productos VALUES (:id_producto,:id_sucursal,:nombre,:precio,:unidades_vendidas,:unidades_bodega,:unidades_pasillo,:id_pasillo)';
            $stmt = $my_pdo->prepare($query);
            $stmt->bindParam(':id_producto',$barcode);
            $stmt->bindParam(':id_sucursal',$_SESSION['sucursal']);
            $stmt->bindParam(':nombre',$nombre);
            $stmt->bindParam(':precio',$precio);
            $stmt->bindParam(':unidades_vendidas',0);
            $stmt->bindParam(':unidades_bodega',$en_bodega);
            $stmt->bindParam(':unidades_pasillo',0);
            $stmt->bindParam(':id_pasillo',-1);
            
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