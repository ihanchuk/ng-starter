var angular = require("angular");
var app=angular.module("app",[]);
var helloDirective = require("./directives/kvHelloDirective");

app
    .controller("MainController",function(){
    })
    .directive("hello",helloDirective());
