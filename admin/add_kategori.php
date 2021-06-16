<?php
require 'conn.php';
require 'helpers/http.php';

$kategori   =   $_POST['kategori'];

$sql = "INSERT INTO kategori(kategori) VALUES('".$kategori."')";

if(!$mysqli->query($sql)) {
    $message = urlencode($mysqli->error);
    header('Location: kategori.php?msg='.$message);
} else {
    header('Location: kategori.php');
}
exit();
?>