angular.module('myApp').service('calculatorService',function() {
    this.addition = function(first,second) {
        return first + second;
    };

    this.subtraction = function(first,second) {
        return first - second;
    };

    this.multiplication = function(first,second) {
        return first * second;
    };
    
    this.division = function(first,second) {
        return first / second;
    };
});