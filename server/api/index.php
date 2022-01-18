<?php
    include '../connect.php';

// header('Content-Type: application/json; charset=utf-8');

    $sql = mysqli_query($conn,"SELECT * FROM categories");
    $result = mysqli_fetch_all($sql,MYSQLI_ASSOC);
    exit(json_encode($result));
?>