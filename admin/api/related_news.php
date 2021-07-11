<?php 

    header('Access-Control-Allow-Origin: *');
    require '../conn.php';
    require '../helpers/http.php';

    if (!isset($_GET['kategori'])) {
        $response = ['status' => true, 'data' => []];
        Http::toJson($response);
    }

    $kategori = $_GET['kategori'];

    $sql = "SELECT kategori_id, title, image, title, content, slug,  viewer, featured, created_at FROM news WHERE news.kategori_id = '".$kategori."' ORDER BY id DESC";

    if (isset($_GET['limit']) && ($_GET['limit'] != '' && $_GET['limit'] != '0')) {
        $sql .= " LIMIT ".$_GET['limit'];
    }

    if (isset($_GET['offset']) && ($_GET['offset'] != '' && $_GET['offset'] != '0')) {
        $str = str_replace(" LIMIT ".$_GET['limit']," LIMIT ".$_GET['offset'].", ".$_GET['limit'],$sql);
        $sql = $str;
    }

    if (!$mysqli->query($sql)) {
        $result = ['status' => false, 'message' => 'Terjadi kesalahan, error: '.$mysqli->error];
        Http::toJson($result);
    }

    $result = $mysqli->query($sql);
    $row = $result->fetch_all(MYSQLI_ASSOC);
    $response = ['status' => true, 'data' => $row];
    
    Http::toJson($response);    

?>