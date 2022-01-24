<?php

    function get_products(){
        $conn = include '../connect.php';
        
        $sql = mysqli_query($conn,"SELECT * FROM products ORDER BY added_at DESC");
        $result = mysqli_fetch_all($sql,MYSQLI_ASSOC);
        $response = ["products" => $result,"count" => count($result)];
        return $response;
    }
?>