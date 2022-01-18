<?php
    include '../../connect.php';

header('Content-Type: application/json; charset=utf-8');

    if($_SERVER['REQUEST_METHOD'] == 'GET'){
        $sql = mysqli_query($conn,"SELECT * FROM products");
        $result = mysqli_fetch_all($sql,MYSQLI_ASSOC);
        exit(json_encode($result));
    } elseif ($_SERVER['REQUEST_METHOD'] == 'POST') {
        // $name = $_POST['name'];
        // $price = $_POST['price'];
        // $quantity = $_POST['quantity'];
        // $category = $_POST['category'];
        // $image = $_POST['image'];
        // $sql = mysqli_query($conn,"INSERT INTO products (name,price,quantity,category,image) VALUES ('$name', '$price', '$quantity', '$category', '$image')");
        // // $result = mysqli_fetch_all($sql,MYSQLI_ASSOC);
        // if ($sql) {
        //     $result = ["status" => "success"];
        // }else {
        //     $result = ["status" => "success"];
        // }
        exit(json_encode($_POST));
    }
    
?>