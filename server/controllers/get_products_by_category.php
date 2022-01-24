<?php

    function get_products_by_category(){
        $conn = include '../connect.php';
        
        $category = $_GET['category'];

        $sql = mysqli_query($conn,"SELECT * FROM products WHERE category = '$category'");
        $result = mysqli_fetch_all($sql,MYSQLI_ASSOC);

        $count = count($result);
        if ($count < 1) {
            $response = ["status" => "failed", "message" => "No products with category '$category' were found."];
        } else {
           $response = ["status" => "success", "products" => $result, "count" => $count];
        }
        return $response;
    }
?>