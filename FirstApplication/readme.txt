a basic angularJs application implemented to have a understand about components such as Modules,Controllers,Directives,filters
->The module is a container for the different parts of an application,Modules are defined as collection of components,directives and other components declared in it.
->Controllers are the components which are enclosed with data and application logic.
->Directives are the components which are majorly used for changing bheaviour of html elements.
->Filters are the components to transform them to certain formats of the application data.

var app = angular.module('myApp',[]);
app.service('additionService',function() {
    this.addition = function(first,second) {
        return first + second;
    }
});

->The service method is used to define a service within an AngularJS module.
Services are singleton objects that perform specific tasks or provide functionality that can be shared across different parts of your application.
services are the function that was created in application to share data to various components of application and also for particular functions.
as above we're creating a service. 
->app.service() takes to parameters one is service name and another once is function.
->function() { ... }: This is the constructor function for the service. When AngularJS creates an instance of the service, it invokes this function.
This function can contain properties and methods that define the behavior of the service.

i have made new changes that,creating separate  service called calculatorService and used it in controller "first controller".
where one service javascript file contains all the methods called addition,subtraction,multiplication and division.