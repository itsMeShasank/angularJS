var app = angular.module("myApp",[]);
app.controller('firstController',function($scope, additionService,subtractionService,multiplicationService,divisionSrvice) {
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
                $scope.total = additionService.addition(first,second);
                break;
            case 'subtraction':
                $scope.total = subtractionService.subtraction(first,second);
                break;
            case 'multiplication':
                $scope.total = multiplicationService.multiplication(first,second);
                break;
            case 'division':
                $scope.total = divisionSrvice.division(first,second);
                break;
        }
    };
});
app.service('additionService',function() {
    this.addition = function(first,second) {
        return first + second;
    }
});
app.service('subtractionService',function() {
    this.subtraction = function(first,second) {
        return first - second;
    }
});
app.service('multiplicationService',function() {
    this.multiplication = function(first,second) {
        return first * second;
    }
});
app.service('divisionSrvice',function() {
    this.division = function(first,second) {
        return first / second;
    }
})