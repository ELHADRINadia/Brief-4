<?php
    include '../connect.php';

    include '../utils/not_empty.php';

    include '../controllers/get_products.php';
    include '../controllers/get_products_sorted.php';
    include '../controllers/get_searched_products.php';
    include '../controllers/get_single_product.php';
    include '../controllers/create_product.php';
    include '../controllers/update_product.php';
    include '../controllers/delete_product.php';

    header('Content-Type: application/json; charset=utf-8');

    if($_SERVER['REQUEST_METHOD'] == 'GET'){
        if (not_empty($_GET) && array_key_exists("id", $_GET)) {
            $response = get_single_product();
            exit(json_encode($response));
        }
        if (not_empty($_GET) && array_key_exists("sorted_by", $_GET) && array_key_exists("order", $_GET)) {
            $response = get_products_sorted();
            exit(json_encode($response));
        } 
        if (not_empty($_GET) && array_key_exists("search", $_GET)){
            $response = get_searched_products();
            exit(json_encode($response));
        }
            $response = get_products();
            exit(json_encode($response));
        
    } elseif ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $response = create_product();
        exit(json_encode($response));
    }
    elseif ($_SERVER['REQUEST_METHOD'] == 'PUT') {
        $response = update_product();
        exit(json_encode($response));
    }
    elseif ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
        $response = delete_product();
        exit(json_encode($response));
    }
    
?>