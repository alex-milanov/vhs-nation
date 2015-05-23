app.factory('Category', ['$resource', function($resource) {
	
	var defaultActions = {
		create: {
			method: 'POST'
		},
		update: {
			method: 'PUT'
		},
		query: {
			method: 'GET',
			isArray: false
		}
	}

	var Category = $resource('/api/categories/:_id', { _id: '@_id' }, defaultActions);

	return Category;
}]);