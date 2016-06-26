/**
 * Created by amarshanand on 25/06/2016.
 */

var app = angular.module('peoplesearchApp',[]);

app.controller('peopleSearchCtrl',function($scope,$http){
    $scope.textChanged = function() {
        // obtain the list of user whose name have the given prefix
        var searchUsers = ($scope.searchString) ? $scope.searchString.trim(): "";
        $http.get('/findusers?q=' + searchUsers).success(function(data, status) {
            $scope.users = data;
        }).error(function(data, status) {
            console.log("Error: could not retrieve users");
        });
    };
    // make an initial call to retrieve all users
    $scope.textChanged();
});

