<?php 
require 'conn.php';
$sql = "SELECT 
            kategori.id ,
            kategori.kategori as kategori, 
            news.id, 
            news.image, 
            news.title, 
            news.content, 
            news.slug, 
            news.created_at 
        FROM news, kategori
        WHERE 
            news.slug = '".$_GET['slug']."' && 
            news.kategori_id = kategori.id";

if(!$mysqli->query($sql)) {
    header("Location: index.php?msg=Terjadi kesalahan!, error ".$mysqli->error);
}

$result = $mysqli->query($sql);
$row = $result->fetch_assoc();

if($row == null) {
    header("Location: index.php?msg=Berita tidak di temukan!");
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lihat Berita </title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.25/css/dataTables.bootstrap5.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
        a.active {
            font-weight: bolder;
        }
    </style>
</head>
<body>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Gatsby & Next.js News Admin</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Dashboard</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="kategori.php">Kategori</a>
        </li>

      </ul>

    </div>
  </div>
</nav>

<br>
<div class="container-fluid">
    <div class="row">
        <div class="col-md-12">
        <button type="button" onclick="batal()" class="btn btn-danger"><i class="fa fa-arrow-left"></i></button>
        <center>
            <img class="img" src="<?= "uploads/".basename($row['image']) ?>" alt="<?= $row['image'] ?>" width="100px">
        </center>
        <h2 class="text-center"><?= $row['title'] ?></h2>
        </div>
    </div>

    <div class="row">
        <div class="col-md-12">
<?php

if(!isset($_GET['slug'])) {
    header("Location: index.php?msg=Berita tidak di temukan!");
}

if(isset($_GET['msg'])) { ?>
<div class="alert alert-danger alert-dismissible fade show" role="alert">
  <?= "<h5>".$_GET['msg']."</h5>" ?>
</div>
<?php } ?>

<form class="row g-3" action="#" method="post">

  <div class="col-md-12">
    <label for="kategori_id" class="form-label">Kategori</label>
    <?php
     require 'conn.php';
      $sql_kategori = "SELECT id, kategori FROM kategori";
      if ($res_kategori = $mysqli->query($sql_kategori)) {
        $get_kategori = $res_kategori->fetch_all(MYSQLI_ASSOC);
      } else {
        die($mysqli->error);
      }
    ?>
    <select name="kategori_id" id="kategori_id" class="form-control" readonly>
        <option selected>-- Pilih --</option>
        <?php
          foreach($get_kategori as $value) { ?>
            <option value="<?= $value['id'] ?>" <?= ($value['kategori'] == $row['kategori'] ? 'selected':'') ?>><?= $value['kategori'] ?></option>
        <?php } ?>
    </select>
  </div>
  <div class="col-12">
    <label for="content" class="form-label">Konten</label>
    <textarea name="content" id="content" class="form-control" placeholder="Masukkan konten..." cols="30" rows="10" readonly><?= $row['content'] ?></textarea>
  </div>
</form>

        </div>
    </div>

</div>


<script src="https://code.jquery.com/jquery-3.5.1.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js" integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT" crossorigin="anonymous"></script>
<script>
    $(document).ready(function() {
        $("input[name=title]").focus();
    });

    function batal() {
        document.location.href = 'index.php';
    }
</script>
</body>
</html>
