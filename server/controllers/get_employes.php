<?php

    function get_employer(){
        $conn = include '../connect.php';
        
        $sql = mysqli_query($conn,"SELECT * FROM employé ORDER BY added_at DESC");
        $result = mysqli_fetch_all($sql,MYSQLI_ASSOC);
        $response = ["employé" => $result,"count" => count($result)];
        return $response;
    }
?>