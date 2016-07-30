var profileController = angular.module("profileController", ['userService']);
profileController.controller("profileController", function($scope, user){

	$scope.user = user;
});
