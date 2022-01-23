<?php
    include '../connect.php';

    include '../utils/not_empty.php';

    include '../controllers/get_products.php';
    include '../controllers/get_single_product.php';
    include '../controllers/create_product.php';
    include '../controllers/update_product.php';
    include '../controllers/delete_product.php';

    header('Content-Type: application/json; charset=utf-8');

    if($_SERVER['REQUEST_METHOD'] == 'GET'){
        if (not_empty($_GET) && not_empty([$_GET['id']])) {
            $response = get_single_product($_GET['id']);
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