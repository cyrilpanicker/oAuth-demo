angular.module('app',['ngRoute'])

.config(function ($routeProvider) {

	$routeProvider
		.when('/',{
			templateUrl:'guest'
		})
		.when('/login',{
			templateUrl:'login'
		})
		.when('/custom',{
			templateUrl:'custom'
		})
		.when('/oauthcallback',{
			templateUrl:'oauthcallback'
		})
		.otherwise({
			redirectTo:'/'
		});

});