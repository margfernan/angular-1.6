/**
 * Created by Martin on 5/1/2017.
 */
var app = angular.module("app", []);
app.controller("HttpGetController", function ($scope, $http) {

    $scope.Details = [];
    $scope.GetAllData = function () {
        $http({
            method: 'GET',
            url: 'http://127.0.0.1:8080/jmobile/service/producto/list?idreparto=10',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function successCallback(response) {
                alert(response);
                $scope.Details = response;
            angular.forEach($scope.Details, function (value, key) {
                $scope.Details.push(value.codigo);
            });
        }).then(function errorCallback(response) {
               alert('error');
        });
    };
});

