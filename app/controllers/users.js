'use strict'
var _ = require('lodash');
var mongoose = require('mongoose');
var passport = require('passport');
var User = mongoose.model('User');

exports.userId = function(req, res, next, storeId){

	User.findById(storeId, function(err, store){

		if(store)
			req.store = store;
		next();
	});
}