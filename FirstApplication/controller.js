var app = angular.module("myApp",[]);
app.controller('firstController',function($scope,calculatorService) {
    $scope.message = "simple Calculator";

    $scope.do = function(operation) {
        var first = 0;
        var second = 0;
        if($scope.firstBox != null) {
            first = $scope.firstBox;
        }
        if($scope.secondBox != null) {
            second = $scope.secondBox;
        }
    
        switch(operation) {
            case 'addition':
                $scope.total = calculatorService.addition(first,second);
                break;
            case 'subtraction':
                $scope.total = calculatorService.subtraction(first,second);
                break;
            case 'multiplication':
                $scope.total = calculatorService.multiplication(first,second);
                break;
            case 'division':
                $scope.total = calculatorService.division(first,second);
                break;
        }
    };
});
// app.service('additionService',function() {
//     this.addition = function(first,second) {
//         return first + second;
//     }
// });
// app.service('subtractionService',function() {
//     this.subtraction = function(first,second) {
//         return first - second;
//     }
// });
// app.service('multiplicationService',function() {
//     this.multiplication = function(first,second) {
//         return first * second;
//     }
// });
// app.service('divisionSrvice',function() {
//     this.division = function(first,second) {
//         return first / second;
//     }
// })