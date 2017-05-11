var angular = require('angular');
require('../servicios/datos');


angular.module('slim')
.controller('datoCtrl', ['$scope','$routeParams', 'datos', function ($scope,$routeParams,datos) {

  $scope.inicio= function(){
    $scope.getDatos();
  }

  $scope.getDatos = function(){
    datos.getD()
    .then(function(result){
      $scope.d=result.data;
    })
  }

  $scope.enviar = function(reg){
    datos.envia(reg)
    .then(function(result){
      if (result.status==200) {
        window.location.href=uri;
      }
    })
  }

  $scope.page = function(i) {
    var id = i;
    document.location.href= uri + 'ver'+'/'+id;
  }

  $scope.pages = function() {
    document.location.href= uri + '/datos';
  }

  $scope.init=function(id){
    var i=$routeParams.id;
    datos.enviaParam(i)
    .then(function(result){
      $scope.unDato=result.data;
    })
  }

  $scope.mod=function(){
   $('#modal1').modal('open');
  }

    $scope.paquetes=[
        {
          "id":           "1",
          "nombre":       "obejeto a",
          "descripcion":  "a-a-a-a-a",
          "costo":        "70"
        },
        {
          "id":           "2",
          "nombre":       "objeto b",
          "descripcion":  "b-b-b-b-b",
          "costo":        "45"
        },
        {
          "id":           "3",
          "nombre":       "objeto c",
          "descripcion":  "c-c-c-c-c",
          "costo":        "55"
        },
        {
          "id":           "4",
          "nombre":       "objeto d",
          "descripcion":  "d-d-d-d-d",
          "costo":        "68"
        },
        {
          "id":           "5",
          "nombre":       "objeto e",
          "descripcion":  "e-e-e-e-e",
          "costo":        "189"
        },
        {
          "id":           "6",
          "nombre":       "objeto f",
          "descripcion":  "f-f-f-f-f",
          "costo":        "102"
        }

      ];


  $scope.doing = [];

  $scope.ver=function () {
    $scope.total = 0;
    var dt = $scope.doing.paquetes;
    dt.forEach(function(dt){
      $scope.total+=parseInt(dt.costo);
    })
  }

  $scope.suma=function(){
    $scope.x = 5;
    $scope.y = 10;
    $scope.x+=$scope.y;
  }

//
  $(document).ready(function(){
    $('.modal').modal();
  });

  $('.datepicker').pickadate({
     selectMonths: true,
     selectYears: 140
   });






}]);
