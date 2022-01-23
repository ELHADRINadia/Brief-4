<?php

    function delete_product()
    {
        $json = file_get_contents('php://input');
        $data = json_decode($json);
        $id = $data->{'id'};

        if (not_empty([$id])) {
            $conn = include '../connect.php';

            $sql = mysqli_query($conn,"DELETE FROM products  WHERE id='$id'");  
            if ($sql) {
                $result = ["status" => "success","message" => "Product deleted successfully."];
            }else {
                $result = ["status" => "failed","message" => "Something went wrong. Please try again!"];
            }
            return $result; 
        } else {
            $result = ["status" => "failed","message" => "Please provide product id!"];
            return $result;
        }
    }
?>