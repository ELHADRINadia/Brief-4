<?php

    function get_products_sorted(){
        $conn = include '../connect.php';
        
        $sorted_by = $_GET['sorted_by'];
        $order = strtoupper($_GET['order']);

        $sql = mysqli_query($conn,"SELECT * FROM products ORDER BY $sorted_by $order");
        $result = mysqli_fetch_all($sql,MYSQLI_ASSOC);
        $response = ["products" => $result,"count" => count($result)];
        return $response;
    }
?>