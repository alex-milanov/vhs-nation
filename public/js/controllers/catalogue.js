'use strict'

app.controller('CatalogueCtrl', function ($scope, $state, Tape) {

	$scope.tapes = [];

	$scope.filters = {};

	$scope.cart = {
		items: [],
		total: 0
	}

	$scope.load = function(){
		Tape.query().$promise.then(function(result){
			$scope.tapes = result.list;
		});
	}

	$scope.addToCart = function(tape){
		var item = tape;
		item.amount = 1;
		$scope.cart.items.push(item);
		updateTotal()
	}

	var updateTotal = function(){
		$scope.cart.total = 0;
		$scope.cart.items.forEach(function(item){
			$scope.cart.total += item.price * item.amount;
		})
	}

	var cartRemoveItem = function(item){
		var index = $scope.cart.items.indexOf(item);
		$scope.cart.items.splice(index,1);
	}


	$scope.reduce = function(item){
		item.amount--;
		if(item.amount <= 0){
			cartRemoveItem(item);
		}
		updateTotal();
	}

	$scope.increase = function(item){
		item.amount++;
		updateTotal()
	}

	$scope.load();

});