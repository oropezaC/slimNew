<?php
$model = require 'model/m.php';

function uno($name) {
  $model = dos($name);
}

function get() {
  $model = gets();
  return $model;
}

class Datos {

  function getss($id) {
    $arr = array('id' => $id);
    $d = json_encode($arr);
    $model = getss($d);
  }

}

?>
