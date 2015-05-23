'use strict'

app.controller('CatalogueCtrl', function ($scope, $state, Tape) {

	$scope.tapes = [];

	$scope.filters = {};

	$scope.load = function(){
		Tape.query().$promise.then(function(result){
			$scope.tapes = result.list;
		});
	}


	$scope.load();

});