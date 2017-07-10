<?php
    $data = $_POST["data"];
    file_put_contents("master.txt",$data);
?>