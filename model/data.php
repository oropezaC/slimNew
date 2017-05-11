<?php

  function Connection() {
    $dbhost="localhost";
    $dbuser="root";
    $dbpass="";
    $dbname="prueba";
    $con = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);
    $con -> exec("set names utf8");
    $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $con;
  }
?>
