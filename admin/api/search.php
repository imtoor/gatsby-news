<?php 
    header('Access-Control-Allow-Origin: *');
    require '../conn.php';
    require '../helpers/http.php';

    $title = $_POST['title'];

    $sql = "SELECT title, slug, image FROM news WHERE title LIKE '%".$title."%'";

    if (!$mysqli->query($sql)) {
        $result = ['status' => false, 'message' => 'Terjadi kesalahan, error: '.$mysqli->error];
        Http::toJson($result);
    }

    $result = $mysqli->query($sql);
    $row = $result->fetch_all(MYSQLI_ASSOC);
    $response = ['status' => true, 'data' => $row];
    
    Http::toJson($response);  

?>