<?php
require '../conn.php';
$input = file_get_contents("php://input");
$data = json_decode($input, true);

$sql = "DELETE FROM kategori WHERE id = '".$data['id']."'";
if ($result = $mysqli->query($sql)) {
    $res = [
        'state' => true,
        'message' => "Kategori telah di hapus"
    ];
} else {
    $res = [
        'state' => false,
        'message' => $mysqli->error
    ];
}
echo json_encode($res);
exit();
?>