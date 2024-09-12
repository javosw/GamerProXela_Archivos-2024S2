<?php
class MiConexion {

    // xampp > php.ini > [942] extension=pdo_pgsql && [944] extension=pgsql
    private $host = 'localhost';
    private $port = "5432";
    private $database = 'gpx';
    private $user = 'postgres';
    private $password = '123123';

    public function getConnection() {
        $source = "pgsql:host=$this->host;port=$this->port;dbname=$this->database";

        try {
            $my_pdo = new PDO($source, $this->user, $this->password);
            $my_pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $my_pdo;
        } catch (PDOException $e) {
            echo '{"JOSQ":"'.$e->getMessage().'"}';
        }
    }

}
