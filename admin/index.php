<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>News Admin</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.25/css/dataTables.bootstrap5.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
        a.active {
            font-weight: bolder;
        }

        /* fab button */
.btn-group-fab {
  position: fixed;
  width: 50px;
  height: auto;
  right: 20px; bottom: 20px;
}
.btn-group-fab div {
  position: relative; width: 100%;
  height: auto;
}
.btn-group-fab .btn {
  position: absolute;
  bottom: 0;
  border-radius: 50%;
  display: block;
  margin-bottom: 4px;
  width: 40px; height: 40px;
  margin: 4px auto;
}
.btn-group-fab .btn-main {
  width: 60px; height: 60px;
  right: 60%; margin-right: -25px;
  z-index: 9;
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
        <div class="col-md-12 text-center">
            <h2>Dashboard</h2>
        </div>
    </div>

    <div class="row">
        <div class="col-md-12 table-responsive">

<table id="news" class="table table-striped" style="width:100%">
        <thead>
            <tr>
                <th>No.</th>
                <th>Judul</th>
                <th>Kategori</th>
                <th>Gambar</th>
                <th>Konten</th>
                <th>Slug</th>
                <th>Tanggal di buat</th>
                <th>#</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>$320,800</td>
                <td>
                    <button title="Lihat berita" data-id="" class="btn btn-info btn-sm btn-detail"><i class="fa fa-eye" aria-hidden="true"></i></button>
                    <button title="Edit berita" data-id="" class="btn btn-primary btn-sm btn-edit"><i class="fa fa-edit" aria-hidden="true"></i></button>
                    <button title="Hapus berita" data-id="" class="btn btn-danger btn-sm btn-delete"><i class="fa fa-trash" aria-hidden="true"></i></button>
                </td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <th>No.</th>
                <th>Judul</th>
                <th>Kategori</th>
                <th>Gambar</th>
                <th>Konten</th>
                <th>Slug</th>
                <th>Tanggal di buat</th>
                <th>#</th>
            </tr>
        </tfoot>
    </table>

        </div>
    </div>
</div>


<div class="btn-group-fab" role="group" aria-label="FAB Menu">
  <div>
    <button type="button" class="btn btn-main btn-success has-tooltip" data-placement="left" title="Tambah Berita" onclick="goto_tambah_berita()"> <i class="fa fa-plus"></i> </button>
  </div>
</div>

<script src="https://code.jquery.com/jquery-3.5.1.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js" integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT" crossorigin="anonymous"></script>
<script src="https://cdn.datatables.net/1.10.25/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/1.10.25/js/dataTables.bootstrap5.min.js"></script>
<script>
    $(document).ready(function() {
    $('#news').DataTable();
} );

function goto_tambah_berita() {
    document.location.href = 'tambah_berita.php';
}
</script>
</body>
</html>
