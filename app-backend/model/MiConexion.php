<?php
class CustomPDO {

    // xampp > php.ini > [942] extension=pdo_pgsql && [944] extension=pgsql

    public static function paraAdmin() {
        $host = 'localhost';
        $port = "5432";
        $database = 'gpx';
        $user = 'postgres';
        $password = '123123';

        $source = "pgsql:host=$host;port=$port;dbname=$database";

        try {
            $my_pdo = new PDO($source, $user, $password);
            $my_pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $my_pdo;
        } catch (PDOException $e) {
            //echo '{"JOSQ":"'.$e->getMessage().'"}';
        }
    }
    public static function paraBodega() {
        $host = 'localhost';
        $port = "5432";
        $database = 'gpx';
        $user = 'postgres';
        $password = '123123';

        $source = "pgsql:host=$host;port=$port;dbname=$database";

        try {
            $my_pdo = new PDO($source, $user, $password);
            $my_pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $my_pdo;
        } catch (PDOException $e) {
            //echo '{"JOSQ":"'.$e->getMessage().'"}';
        }
    }

}
