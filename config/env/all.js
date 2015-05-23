'use strict';

var path = require('path');
var rootPath = path.normalize(__dirname + '/../..');

module.exports = {
	app: {
		title: 'VHS Nation',
		description: '',
		keywords: ''
	},
	root: rootPath,
	port: process.env.PORT || 3000,
	templateEngine: 'jade',
	sessionSecret: 'MEAN',
	sessionCollection: 'sessions'
};