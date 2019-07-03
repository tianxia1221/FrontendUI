/**
 * Created by tiaxia on 11/28/2016.
 */
//app.js
var App = angular.module("App", []);

App.controller("FirstCtrl", function($scope){
    $scope.data = {
        message : "Hello"
    };
});