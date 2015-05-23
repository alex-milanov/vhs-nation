'use strict'

app.controller('AdminTapesCtrl', function ($scope, $state, Tape) {

	$scope.tapes = [];
	$scope.tape = {};

	$scope.load = function(){
		Tape.query().$promise.then(function(result){
			$scope.tapes = result.list;
		});
	}

	$scope.load();

	$scope.reset = function(){
		$scope.tape = {};
	}

	$scope.edit = function(tape){
		$scope.tape = tape;
		
	}

	$scope.save = function(tape){
		if(tape._id){
			Tape.update({_id: tape._id}, tape).$promise.then(function(){
				$scope.load();
			})
		} else {
			Tape.create(tape).$promise.then(function(){
				$scope.load();
			});
		}
		$scope.tape = {};
	}

	$scope.delete = function(tape){
		Tape.delete({_id: tape._id}, tape).$promise.then(function(){
			$scope.load();
		})
	}

});