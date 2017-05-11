<?php

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require 'vendor/autoload.php';
require 'controller/prueba.php';

$app = new \Slim\App();
$loader = new Twig_Loader_Filesystem('./cliente/views');
$twig = new Twig_Environment($loader);


//clases
$d = new Datos;

$app->get('/home/{name}',function(Request $request, Response $response) use ($twig){
   $name=$request->getAttribute('name');
   echo $twig->render('index.html', array('name' => $name));
});

$app->get('/get', function (Request $request, Response $response) use ($twig){
   $d=get();
  return $d;
});

$app->post('/uno', function (Request $request, Response $response) use($d){
  $name = $request->getBody();
  $ct = uno($name);
  return $response;
});

$app->get('/get/{id}', function (Request $request, Response $response)use($d){
  $id=$request->getAttribute('id');
  $d->getss($id);
  return $d;
});

$app->run();

?>
