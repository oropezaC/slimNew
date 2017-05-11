var angular = require('angular');
angular.module('slim')
	.service('datos', ['$http', function ($http){
		var urlBase = url_base;

    this.getD = function () {
    return $http.get(urlBase + '/get');
   };

   this.envia = function (d) {
   	return $http.post(urlBase + '/uno',d);
  };

	this.enviaParam = function (d) {
		return $http.get(urlBase + '/get/'+d);
 };

  }]);
