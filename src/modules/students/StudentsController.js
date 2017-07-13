/**
 * Created by sanjibdevnath on 12/7/17.
 */

module.exports  = app => {
    app.controller("StudentsController", $scope => {
        $scope.student  = {
            firstName: "Sanjib",
            lastName: "Devnath",
            fees: 500,
            subjects:[
                {name:'Physics',marks:70},
                {name:'Chemistry',marks:80},
                {name:'Math',marks:65},
                {name:'English',marks:75},
                {name:'Hindi',marks:67}
            ],
            fullName: () => {
                return $scope.student.firstName +" "+ $scope.student.lastName;
            }
        }
    });
};