<?php
    header('Access-Control-Allow-Origin: *');
    require '../conn.php';
    require '../helpers/http.php';

    $sql = "SELECT kategori_id, title, image, content, slug, viewer, created_at FROM news ORDER BY viewer LIMIT 3";
    if (!$mysqli->query($sql)) {
        $result = ['status' => false, 'message' => 'Terjadi kesalahan, error: '.$mysqli->error];
        Http::toJson($result);
    }

    $result = $mysqli->query($sql);
    $row = $result->fetch_all(MYSQLI_ASSOC);
    $response = ['status' => true, 'data' => $row];

    Http::toJson($response);
?>
