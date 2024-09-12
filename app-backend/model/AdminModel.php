<?php


class AdminModel{

    public static function addEmpleado($dpi, $nombre)
    {
        require_once __DIR__.'/MiConexion.php';

        $my_pdo = CustomPDO::paraAdmin();

        $query = 'INSERT INTO administracion.empleados VALUES (:dpi,:nombre)';

        try {
            $stmt = $my_pdo->prepare($query);
            $stmt->bindParam(':dpi', $dpi);
            $stmt->bindParam(':nombre', $nombre);
            if ($stmt->execute()) {
                return true;
            }
    
        } catch (\Throwable $th) {
            header('HTTP/1.1 400');
            echo '{"JOSQ":"'.$th->getMessage().'"}';
            exit;
        }

        return false;
    }


}