var app = angular.module('adminPanel', []);
app.controller('namesController', function($scope,$http) {
    $http.get('http://www.titandesarrollo.com/_api/movimientos')
    .then(function (response) {$scope.names = response.data;});
});