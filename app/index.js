var angular = require("angular");
var window.app=angular.module("app",[]);
window.app.__xc__ = "123123";
const helloDirective = require("./directives/hello/kvHelloDirective");
const frontController = require("./controllers/front/frontController");

if (TEST_ENV) {
    console.log("************** RUNING TESTS *************");
    require("angular-mocks/angular-mocks");
}
window.app
    .controller('mainController',frontController())
    .directive("hello",helloDirective());
