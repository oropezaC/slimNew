<?php

require 'data.php';

function dos($name) {
  $d = json_decode($name);
  $query = "INSERT INTO
  pd
  (nombre,paterno,materno)
  VALUES
  (:nombre,:paterno,:materno);";
  try {
    $con = Connection();
    $st = $con->prepare($query);
    $st->bindParam("nombre", $d->nombre);
    $st->bindParam("paterno",   $d->paterno);
    $st->bindParam("materno", $d->materno);
    $st->execute();
    $con = null;
  } catch(PDOException $e) {
    echo '{"error":{"text":'. $e->getMessage() .'}}';
  }
}


function gets() {
  $query ="select * from pd;";
  try {
    $con = Connection();
    $st = $con->query($query);
    $result = $st->fetchAll(PDO::FETCH_OBJ);
    $con = null;
    $dato =json_encode($result);
    return $dato;
  } catch(PDOException $err) {
    echo '{"error":{"ERROR":'. $err->getMessage() .'}}';
    return $err;
  }
}

function getss($d) {
  $dato = json_decode($d);
  $query ="SELECT * FROM pd WHERE id =:id;";
  try {
    $con = Connection();
    $st = $con->prepare($query);
    $st->bindParam("id", $dato->id);
    $st->execute();
    $result = $st->fetchAll(PDO::FETCH_OBJ);
    $con = null;
    echo  json_encode($result);
    $datos =json_encode($result);
  } catch(PDOException $err) {
    echo '{"error":{"ERROR":'. $err->getMessage() .'}}';
  }
}


?>
