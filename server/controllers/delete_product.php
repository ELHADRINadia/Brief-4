<?php

    function delete_product()
    {
        $json = file_get_contents('php://input');
        $data = json_decode($json);
        $id = $data->{'id'};

        if (not_empty([$id])) {
            $conn = include '../connect.php';

            $sql_get_image = mysqli_query($conn,"SELECT image FROM products  WHERE id='$id'");  
            $result = mysqli_fetch_all($sql_get_image,MYSQLI_ASSOC);

            $image = $result[0]['image'];

            $sql = mysqli_query($conn,"DELETE FROM products  WHERE id='$id'");  

            //delete image
            unlink("../uploads/$image");

            if ($sql) {
                $response = ["status" => "success","message" => "Product deleted successfully."];
            }else {
                $response = ["status" => "failed","message" => "Something went wrong. Please try again!"];
            }
            return $response; 
        } else {
            $response = ["status" => "failed","message" => "Please provide product id!"];
            return $response;
        }
    }
?>