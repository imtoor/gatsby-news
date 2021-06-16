<?php
    require '../conn.php';
    require '../helpers/http.php';

    if (!isset($_GET['slug'])) {
        $response = ['status' => true, 'data' => []];
        Http::toJson($response);
    } else {

        $slug = $_GET['slug'];
        if ($slug == "all") {
            $sql = "SELECT title, image, title, content, slug, created_at FROM news";
        } else {
            $sql = "SELECT title, image, title, content, slug, created_at FROM news WHERE slug = '".$slug."'";
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