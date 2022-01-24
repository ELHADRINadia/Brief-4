<?php
    include '../utils/image_upload.php';

    function create_employee()
    {
        if (not_empty($_POST) && not_empty([$_POST['name'],$_POST['email'],$_POST['password']])) {
            $conn = include '../connect.php';

            $name = $_POST['name'];
            $price = $_POST['email'];
            $quantity = $_POST['password'];
            $sql = mysqli_query($conn,"INSERT INTO employé (name,email,password) VALUES ('$name', '$email', '$password', NOW())");
            if ($sql) {
                $result = ["status" => "success","message" => "employé added successfully."];
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