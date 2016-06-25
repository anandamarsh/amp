/**
 * Created by amarshanand on 25/06/2016.
 */

var app = angular.module('peoplesearch',[]);

app.controller('peopleSearchCtrl',function($scope,$http){
    $scope.textChanged = function() {
        // obtain the list of user whose name have the given prefix
        $http.get('/findusers?q='+$scope.searchString.trim()).success(function(data, status) {
            $scope.users = data;
        }).error(function(data, status) {
            console.log("Error: could not retrieve users");
        });
    };
    // make an initial call to retrieve all users
    $scope.searchString = "";
    $scope.textChanged();
});
