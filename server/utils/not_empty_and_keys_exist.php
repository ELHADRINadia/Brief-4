<?php
    function not_empty_and_keys_exist($array,$keys){
        if (!isset($array) || empty($array) ) {
            return false;
        }
        foreach($keys as $key => $value) {
            
            if (!array_key_exists($value, $array) || empty($array[$value]) ) {
                return false;
            }
        }
        return true;
    }
?>