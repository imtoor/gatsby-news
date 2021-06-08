<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tambah Berita</title>
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
        <h2 class="text-center">Tambah Berita</h2>
        </div>
    </div>

    <div class="row">
        <div class="col-md-12">

<form class="row g-3" action="#" method="post" enctype="multipart/form-data">
  <div class="col-md-12">
    <label for="title" class="form-label">Judul</label>
    <input type="text" class="form-control" id="title" name="title">
  </div>
  <div class="col-md-12">
    <label for="kategori_id" class="form-label">Kategori</label>
    <select name="kategori_id" id="kategori_id" class="form-control">
        <option selected>-- Pilih --</option>
    </select>
  </div>
  <div class="col-12">
    <label for="image" class="form-label">Gambar</label>
    <input type="file" class="form-control" id="image" name="image">
  </div>
  <div class="col-12">
    <label for="content" class="form-label">Konten</label>
    <textarea name="content" id="content" class="form-control" placeholder="Masukkan konten..." cols="30" rows="10"></textarea>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-success">Simpan</button>
    <button type="button" onclick="batal()" class="btn btn-danger">Batal</button>
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
