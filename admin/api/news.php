<?php
    header('Access-Control-Allow-Origin: *');
    require '../conn.php';
    require '../helpers/http.php';

    if (!isset($_GET['slug'])) {
        $response = ['status' => true, 'data' => []];
        Http::toJson($response);
    }

    function getFeaturedNews() {
        $sql = "SELECT * FROM news ";
        return $result;
    }

    $slug = $_GET['slug'];
    if ($slug == "all") { // get all

        if (isset($_GET['featured']) && ($_GET['featured'] != '' && $_GET['featured'] == '1')) {
            return getFeaturedNews();
        }

        if (isset($_GET['group_by_kategori']) && ($_GET['group_by_kategori'] != '' && $_GET['group_by_kategori'] == '1')) {
            $sql = "SELECT news_id, kategori, title, content, image, viewer, featured FROM kategori JOIN (SELECT id as news_id, kategori_id, title, content, image, slug FROM news) news ON news.kategori_id = kategori.id ORDER BY news_id DESC";
//            $sql = "SELECT kategori.kategori as kategori, news.title, news.image, news.title, news.content, news.slug, news.created_at FROM news, kategori WHERE news.kategori_id = kategori.id GROUP BY ".$_GET['group_by'];
        } else {
            $sql = "SELECT news.id ,kategori.kategori, news.title, news.image, news.title, news.content, news.slug,  news.viewer, news.featured, news.created_at FROM news, kategori WHERE news.kategori_id = kategori.id ORDER BY news.id DESC";
        }

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
        Http::toJson($result);
    }

    $result = $mysqli->query($sql);
    $row = $result->fetch_all(MYSQLI_ASSOC);
    $response = ['status' => true, 'data' => $row];
    
    Http::toJson($response);
?>