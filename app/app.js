"use strict";
console.log("app.js"); 

// An Angular application module. Inject ngRoute into your applcation.
var app = angular.module("HighwayApp", ['ngRoute']);

	app.config(['$routeProvider',
	  function($routeProvider) {
	    $routeProvider
	      .when('/items/list', {
					templateUrl: 'partials/list-view.html',
					controller: 'listControl'
				})
	      .when('/brp', {
	        templateUrl: 'partials/highway.html',
	        controller: 'brpControl'
	      })
	      .when('/ptp', {
					templateUrl: 'partials/highway.html',
					controller: 'ptpControl'
				})
				.otherwise('/');
	  }
]);