<?php
    header('Access-Control-Allow-Origin: *');
    require '../conn.php';
    require '../helpers/http.php';

    if (!isset($_GET['slug'])) {
        $response = ['status' => true, 'data' => []];
        Http::toJson($response);
    }

    $slug = $_GET['slug'];
    if ($slug == "all") { // get all

        $sql = "SELECT kategori_id, title, image, title, content, slug, created_at FROM news";
        if (isset($_GET['limit']) && ($_GET['limit'] != '' && $_GET['limit'] != '0')) {
            $sql .= " LIMIT ".$_GET['limit'];
        }

        if (isset($_GET['offset']) && ($_GET['offset'] != '' && $_GET['offset'] != '0')) {
            $str = str_replace(" LIMIT ".$_GET['limit']," LIMIT ".$_GET['offset'].", ".$_GET['limit'],$sql);
            $sql = $str;
        }

    } else {
        $sql = "SELECT kategori_id, title, image, title, content, slug, created_at FROM news WHERE slug = '".$slug."'";
    }

    if (!$mysqli->query($sql)) {
        $result = ['status' => false, 'message' => 'Terjadi kesalahan, error: '.$mysqli->error];
    }

    $result = $mysqli->query($sql);
    $row = $result->fetch_all(MYSQLI_ASSOC);
    $response = ['status' => true, 'data' => $row];
    
    Http::toJson($response);
?>