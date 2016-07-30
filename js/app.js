var myApp = angular.module('myApp', [
  'ngRoute',
  'profileController'
]);

myApp.config(['$routeProvider' , function($routeProvider){
  $routeProvider.
  when('/edit',{
    templateUrl:'partial/edit.html',
    controller:'profileController'
  }).
  when('/view',{
    templateUrl:'partial/view.html',
    controller:'profileController'
  }).
  otherwise({
    redirectTo: '/edit'
  });
}]);

// .controller("todoController", ['$scope', todoController]);
