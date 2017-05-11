var angular = require ('angular');
require('angular-utils-pagination');
require('angular-route');
require('checklist-model');

url_base = 'http://localhost/app/app.php';
uri ='http://localhost/app/cliente/views/home.html#!/';
angular.module('slim', ['angularUtils.directives.dirPagination','ngRoute','checklist-model'])
.config(['$routeProvider',function($routeProvider){
  $routeProvider

      .when('/', {
        templateUrl : './index.html',
        controller: 'accesoCtrl'
      })
      .when('/clientes', {
        templateUrl : './cliente.html',
        controller: 'datoCtrl'
      })
      .when('/datos', {
        templateUrl : './registro.html',
        controller: 'datoCtrl'

      })
      .when('/ver/:id', {
        templateUrl : './datos.html',
        controller: 'datoCtrl'
      })

}]);



var url = url_base;

require('./controles/datos');
require('./controles/acceso');
