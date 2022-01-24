<?php
    function not_empty($array){
        if (!isset($array) || empty($array) ) {
            return false;
        }
        foreach($array as $key => $value) {
            if (!isset($value) || empty($value)) {
                return false;
            }
        }
        return true;
    }
?>