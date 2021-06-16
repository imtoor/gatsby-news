<?php
    require '../conn.php';
    require '../helpers/http.php';

    if (!isset($_GET['name'])) {
        $response = ['status' => true, 'data' => []];
        Http::toJson($response);
    } else {

        $name = $_GET['name'];
        if ($name == "all") {
            $sql = "SELECT kategori FROM kategori";
        } else {
            $sql = "SELECT kategori FROM kategori WHERE kategori = '".$name."'";
        }
        
    }

    if (!$mysqli->query($sql)) {
        $result = ['status' => false, 'message' => 'Terjadi kesalahan, error: '.$mysqli->error];
    }

    $result = $mysqli->query($sql);
    $row = $result->fetch_all(MYSQLI_ASSOC);
    $response = ['status' => true, 'data' => $row];
    
    Http::toJson($response);
?>