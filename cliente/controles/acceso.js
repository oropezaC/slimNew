var angular = require('angular');
require('../servicios/acceso');


angular.module('slim')
.controller('accesoCtrl', ['$scope','$routeParams','acceso', function ($scope,$routeParams,acceso) {

  $scope.log_in = function(d){
    console.log(d);
  }


}]);
