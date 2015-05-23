"use strict"
app.factory('Auth',
	function ($state, $http, $location, $cookieStore, $q) {

		var loggedIn = false;
		var userData;

		var Auth = {
			loggedIn : function(){
				return loggedIn;
			},
			login: function(user){
				return $http.post("/api/login", user).then(function(response){
					userData = response.data;
					loggedIn = true;
				})
			},
			register: function(user){
				return $http.post("/api/register", user)
			},
			logout: function(){
				return $http.get("/api/logout").then(function(){
					userData = {};
					loggedIn = false;
				})
			},
			getUserData: function(){
				return userData;
			}
		}

		return Auth;
	})