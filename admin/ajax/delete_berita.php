<?php

$input = file_get_contents("php://input");
$data = json_decode($input, true);

$uploadPath = "htt[://localhost/gatsby-news/admin/uploads/";
$targetFile = $uploadPath.basename($data['image']);

if (file_exists($targetFile)) {

    if(unlink($targetFile)) {

        delete_news($data);

    } else {
        $res = [
            'state' => false,
            'message' => 'tidak bisa hapus file. check permissiona anda!'
        ];
    }

    echo json_encode($res);
    exit();

} else {
    delete_news($data);
}

function delete_news($data) {
    require '../conn.php';

    $sql = "DELETE FROM news WHERE id = '".$data['id']."'";
    if ($result = $mysqli->query($sql)) {
        $res = [
            'state' => true,
            'message' => "Berita telah di hapus"
        ];
    } else {
        $res = [
            'state' => false,
            'message' => $mysqli->error
        ];
    }

    echo json_encode($res);
    exit();

}

?>