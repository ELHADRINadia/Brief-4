<?php
    include '../connect.php';

    include '../utils/not_empty.php';
    include '../controllers/get_employe.php';
    include '../controllers/get_single_employe.php';
    include '../controllers/create_employe.php';
    include '../controllers/update_employe.php';
    include '../controllers/delete_employe.php';

    header('Content-Type: application/json; charset=utf-8');

    if($_SERVER['REQUEST_METHOD'] == 'GET'){
        if (not_empty($_GET) && not_empty([$_GET['id']])) {
            $response = get_single_employe($_GET['id']);
            exit(json_encode($response));
        }
        $response = get_employes();
        exit(json_encode($response));
    } elseif ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $response = create_employe();
        exit(json_encode($response));
    }
    elseif ($_SERVER['REQUEST_METHOD'] == 'PUT') {
        $response = update_employe();
        exit(json_encode($response));
    }
    elseif ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
        $response = delete_employe();
        exit(json_encode($response));
    }
    
?>