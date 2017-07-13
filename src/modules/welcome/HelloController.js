/**
 * Created by sanjibdevnath on 12/7/17.
 */

module.exports  = app => {
    "use strict";

    app.controller("HelloController", ($scope, $http) => {
        let url = "http://localhost:8080/api/v2/";

        $scope.helloTo          = {};
        $scope.helloTo.title    = "Sanjib";
        $http.get(url + "users", {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }).then(result => {
            $scope.response = result.data;
        }, error => {
            console.log(error.data.message);
        });

        $scope.resetData    =  () => {
            $scope.fname    = "Sanjib";
            $scope.lname    = "Devnath";
            $scope.email    = "devnath.sanjib@gmail.com";
        };

        $scope.resetData();
    });
};
