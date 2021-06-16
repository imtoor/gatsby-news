<?php

declare(strict_types = 1);

require 'conn.php';
require 'helpers/http.php';

if(isset($_POST['action']) && $_POST['action'] == 'submit') {

    $image      = $_FILES['image'];
    $image['name']  =   uniqid()."-".$image['name'];
    $uploadPath = "uploads/";
    $targetFile = $uploadPath.basename($image['name']);

    $isImage = isImage($image);
    if(!$isImage['status']) {
        Http::redirect('Location: edit_berita.php?msg='.$isImage['message']);
    }

    $isFileExist = isFileExist($targetFile);
    if ($isFileExist['status']) {
        Http::redirect('Location: edit_berita.php?msg='.$isFileExist['message']);
    }
    

    $is_file_size_more_than_five_mb = checkFileSize($image, 500000);
    if($is_file_size_more_than_five_mb['status']) {
        Http::redirect('Location: edit_berita.php?msg='.$is_file_size_more_than_five_mb['message']);
    }

    $formats = ['jpg','png','jpeg','gif'];
    $allowFileFormats = allowFileFormats($targetFile, $formats);
    if($allowFileFormats['status']) {
        Http::redirect('Location: edit_berita.php?msg='.$allowFileFormats['message']);
    }

    if (!move_uploaded_file($image['tmp_name'],$targetFile)) {
        Http::redirect('Location: edit_berita.php?msg=Terjadi error saat mengupload file anda!');
    } 
    
    $id            =   $_POST['id'];
    $kategori_id   =   $_POST['kategori_id'];
    $title         =   $_POST['title'];
    $content       =   $_POST['content'];
    $slug          =   toSlug($title);

    $sql = "UPDATE news SET kategori_id = '".$kategori_id."', image = '".$image['name']."', title = '".$title."', content = '".$content."', slug = '".$slug."' WHERE id = '".$id."'";

    if($result = $mysqli->query($sql)) {
        header('Location: index.php');
    } else {
        unlink($targetFile);
        header('Location: edit_berita.php?msg=Gagal mengupdate data, error: '.$mysqli->error);
    }

} else {
    Http::redirect('Location: edit_berita.php');
}

function isImage(array $image): array {
    $getImageSize = getImageSize($image['tmp_name']);
    if($getImageSize !== false) {
        return ['status' => true];
    } else {
        return ['status' => false, 'message' => 'File bukan gambar!'];
    }
}

function isFileExist(string $targetFile): array {
    if(file_exists($targetFile)) {
        return ['status' > true, 'message' => 'File sudah ada!'];
    } else {
        return ['status' => false];
    }
}

function checkFileSize(array $image, int $limit): array {
    if($image['size'] > $limit) {
        return ['status' => true, 'message' => 'Gambar di atas '.$limit.' MB'];
    } else {
        return ['status' => false];
    }
}

function allowFileFormats(string $targetFile, array $formats): array {

    $imageType = strtolower(pathinfo($targetFile,PATHINFO_EXTENSION));
    $is_format_not_in_list = true;

    for ($i=0; $i < count($formats); $i++) { 
        
        if($imageType != $formats[$i]) {
            $is_format_not_in_list = true;
        } else {
            $is_format_not_in_list = false;
            break;
        }
        
    }

    if($is_format_not_in_list) {
        return ['status' => true, 'message' => 'Format file yang di terima hanya jpg, png, jpeg, gif'];
    } else {
        return ['status' => false];
    }
}

function toSlug($string = ""): string {
    if ($string == "") {
        return "";
    }

    $str = explode(" ",$string);
    $newStr = "";

    $str_length = count($str);
    for ($i=0; $i < $str_length; $i++) { 
        $newStr .= $str[$i];
        if (($i+1) != $str_length) {
            $newStr .= "-";
        }
    }

    return $newStr;
}
?>