<?php

class Http {

    public static function toJson(array $data) {
        echo json_encode($data);
        exit();
    }

    public static function redirect($location = "") {
        header($location);
        exit();
    }

}

?>