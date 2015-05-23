'use strict'

app.controller('AdminCategoriesCtrl', function ($scope, $state, Category) {

	$scope.categories = [];
	$scope.category = {};

	$scope.load = function(){
		Category.query().$promise.then(function(result){
			$scope.categories = result.list;
		});
	}

	$scope.load();

	$scope.reset = function(){
		$scope.category = {};
	}

	$scope.edit = function(category){
		$scope.category = category;
		
	}

	$scope.save = function(category){
		if(category._id){
			Category.update({_id: category._id}, category).$promise.then(function(){
				$scope.load();
			})
		} else {
			Category.create(category).$promise.then(function(){
				$scope.load();
			});
		}
		$scope.category = {};
	}

	$scope.delete = function(category){
		Category.delete({_id: category._id}, category).$promise.then(function(){
			$scope.load();
		})
	}

});