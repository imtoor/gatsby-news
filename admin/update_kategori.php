<?php
require 'conn.php';

$sql = "UPDATE kategori SET kategori = '".$_POST['kategori']."' WHERE id = '".$_POST['id']."'";
if ($result = $mysqli->query($sql)) {
    header('Location: kategori.php');
} else {
    echo "Terjadi kesalahan, error: ".$mysqli->error; ?>
    <script>
        setTimeout(function() {
            document.location.href = 'kategori.php';
        }, 2500);
    </script>
<?php } ?>