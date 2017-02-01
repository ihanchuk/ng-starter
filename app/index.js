var angular = require("angular");
var app=angular.module("app",[]);
var helloDirective = require("./directives/kvHelloDirective");

if (TEST_ENV) {
    console.log("************** RUNING TESTS *************");
    require("angular-mocks/angular-mocks");
}
app
    .controller("MainController",function(){
    })
    .directive("hello",helloDirective());
