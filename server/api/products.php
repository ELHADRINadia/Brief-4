<?php
    include '../connect.php';

    header('Content-Type: application/json; charset=utf-8');

    if($_SERVER['REQUEST_METHOD'] == 'GET'){
        $sql = mysqli_query($conn,"SELECT * FROM products");
        $result = mysqli_fetch_all($sql,MYSQLI_ASSOC);
        exit(json_encode($result));
    } elseif ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $json = file_get_contents('php://input');
        $data = json_decode($json);
        $name = $data->{'name'};
        $price = $data->{'price'};
        $quantity = $data->{'quantity'};
        $category = $data->{'category'};
        $image = $data->{'image'};
        $sql = mysqli_query($conn,"INSERT INTO products (name,price,quantity,category,image) VALUES ('$name', '$price', '$quantity', '$category', '$image')");
        if ($sql) {
            $result = ["status" => "success"];
        }else {
            $result = ["status" => "failed"];
        }
       exit(json_encode($result));
    }
    elseif ($_SERVER['REQUEST_METHOD'] == 'PUT') {
                                   
        $json = file_get_contents('php://input');
        $data = json_decode($json);
        $id = $data->{'id'};
        $name = $data->{'name'};
        $price = $data->{'price'};
        $quantity = $data->{'quantity'};
        $category = $data->{'category'};
        $image = $data->{'image'};
        $sql = mysqli_query($conn,"UPDATE products SET name='$name',price='$price',quantity='$quantity',category='$category',image='$image' WHERE id='$id'"); 
        if ($sql) {
            $result = ["status" => "success"];
        }else {
            $result = ["status" => "failed"];
        } 
        exit(json_encode($result));
    }
    elseif ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
                                        
        $json = file_get_contents('php://input');
        $data = json_decode($json);
        $id = $data->{'id'};
        $sql = mysqli_query($conn,"DELETE FROM products  WHERE id='$id");  
        if ($sql) {
            $result = ["status" => "success"];
        }else {
            $result = ["status" => "failed"];
        } 
        exit(json_encode($result));  

    }
    
?>