<?php
    function image_upload($image) {
        $extension = pathinfo($image['name'], PATHINFO_EXTENSION);
        $new_name = time() . '.' . $extension;
        move_uploaded_file($image['tmp_name'], '../uploads/' . $new_name);
        return $new_name;
    }
?>