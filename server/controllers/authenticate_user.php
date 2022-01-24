<?php

    function authenticate_user()
    {
        $json = file_get_contents('php://input');
        $data = json_decode($json);
        $username = $data->{'username'};

        if (not_empty([$id])) {
            $conn = include '../connect.php';

            $sql = mysqli_query($conn,"SELECT FROM users  WHERE name='$username'");  

            $result = mysqli_fetch_all($sql,MYSQLI_ASSOC);

            $count = count($result);

            if ($count < 1) {
                $response = ["status" => "failed", "message" => "No user was found!"];
            } else {
                $response = ["status" => "success", "user" => $result[0]];
            }
            return $response; 
        } else {
            $response = ["status" => "failed","message" => "Please provide product id!"];
            return $response;
        }
    }
?>