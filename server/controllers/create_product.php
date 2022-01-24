<?php
    include '../utils/image_upload.php';

    function create_product()
    {
        if (not_empty($_POST) && not_empty([$_POST['name'],$_POST['price'],$_POST['quantity'],$_POST['category'],$_FILES['image']])) {
            $conn = include '../connect.php';

            $name = $_POST['name'];
            $price = $_POST['price'];
            $quantity = $_POST['quantity'];
            $category = $_POST['category'];
            $image = image_upload($_FILES['image']);
            $sql = mysqli_query($conn,"INSERT INTO products (name,price,quantity,category,image,added_at) VALUES ('$name', '$price', '$quantity', '$category', '$image', NOW())");
            if ($sql) {
                $result = ["status" => "success","message" => "Product added successfully."];
            }else {
                $result = ["status" => "failed","message" => "Something went wrong. Please try again!"];
            }
            return $result;
        } else {
            $result = ["status" => "failed","message" => "Please provide all values!"];
            return $result;
        }
    }
?>