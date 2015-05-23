app.factory('Tape', ['$resource', function($resource) {
	
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

	var Tape = $resource('/api/tapes/:_id', { _id: '@_id' }, defaultActions);

	return Tape;
}]);