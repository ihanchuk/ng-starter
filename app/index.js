var angular = require("angular");
var app=angular.module("app",[]);
const helloDirective = require("./directives/hello/kvHelloDirective");
const frontController = require("./controllers/front/frontController");

if (TEST_ENV) {
    console.log("************** RUNING TESTS *************");
    require("angular-mocks/angular-mocks");
}
app
    .controller('mainController',frontController())
    .directive("hello",helloDirective());
