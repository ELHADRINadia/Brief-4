<?php
    include '../connect.php';

    function update_product()
    {
        $json = file_get_contents('php://input');
        $data = json_decode($json);

        if (not_empty([$data->{'id'},$data->{'name'},$data->{'price'},$data->{'quantity'},$data->{'category'}])) {
            $conn = include '../connect.php';

            $id = $data->{'id'};
            $name = $data->{'name'};
            $price = $data->{'price'};
            $quantity = $data->{'quantity'};
            $category = $data->{'category'};
            $sql = mysqli_query($conn,"UPDATE products SET name='$name',price='$price',quantity='$quantity',category='$category' WHERE id='$id'"); 
            if ($sql) {
                $result = ["status" => "success","message" => "Product updated successfully."];
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