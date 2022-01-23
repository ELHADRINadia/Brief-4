<?php

    function get_single_product($id){
        $conn = include '../connect.php';

        $sql = mysqli_query($conn,"SELECT * FROM products WHERE id = '$id'");
        $result = mysqli_fetch_all($sql,MYSQLI_ASSOC);

        $count = count($result);
        if ($count < 1) {
            $response = ["status" => "failed", "message" => "No product with id $id was found!"];
        } else {
           $response = ["status" => "success", "product" => $result[0], "count" => $count];
        }
        return $response;
    }
?>