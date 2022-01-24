<?php
    function not_empty($array){
        if (empty($array) || !isset($array)) {
            return false;
        }
        foreach($array as $key => $value) {
            if (empty($value) || !isset($value)) {
                return false;
            }
        }
        return true;
    }
?>