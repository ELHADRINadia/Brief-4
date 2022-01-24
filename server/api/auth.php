<?php
     include '../connect.php';

    include '../utils/not_empty.php';

    header('Content-Type: application/json; charset=utf-8');

    if($_SERVER['REQUEST_METHOD'] == 'GET'){
        if (not_empty($_GET) && not_empty([$_GET['id']])) {
            $response = get_single_product();
            exit(json_encode($response));
        }
        if (not_empty($_GET) && isset($_GET['sorted_by'],$_GET['order'])) {
            $response = get_products_sorted();
            exit(json_encode($response));
        } 
        if (not_empty($_GET) && not_empty([$_GET['search']])){
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