"use strict";

app.controller('NavCtrl', function($scope){

   $scope.navItems = [
      {
         name: "Blue Ridge Parkway",
         url: '#/brp'
      },
   	{
   		name: "Palm to Pines",
   		url: '#/ptp'
   	}]; 
});