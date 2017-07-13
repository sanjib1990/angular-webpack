import angular from "angular";
import ngRoute from "angular-route";
import helloCtrl from "./modules/welcome/HelloController";
import studentCtrl from "./modules/students/StudentsController";

let app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider, $httpProvider, $locationProvider){
    $routeProvider
        .when("/one", {
            templateUrl: "one.htm",
            controller: "OneController"
        })
        .when("/two", {
            templateUrl: "two.htm",
            controller: "TwoController"
        })
        .otherwise({
            redirectTo: '/one'
        });

    $httpProvider.defaults.useXDomain = true;
    $locationProvider.html5Mode(true);
});

app.controller("OneController", function ($scope) {
   $scope.message = "This is One Controller"
});

app.controller("TwoController", function ($scope) {
    $scope.message = "This is Two Controller"
});

studentCtrl(app);
helloCtrl(app);