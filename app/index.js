<<<<<<< HEAD
var angular = require("angular");
var window.app=angular.module("app",[]);
window.app.__xc__ = "123123";
=======
var app = require("./loader")();
>>>>>>> 3138adb41c8fb965b709e01afd04b679a4aeaeda
const helloDirective = require("./directives/hello/kvHelloDirective");
const frontController = require("./controllers/front/frontController");

if (TEST_ENV) {
    console.log("************** RUNING ANGULAR TESTS *************");
    require("angular-mocks/angular-mocks");
}
window.app
    .controller('mainController',frontController())
    .directive("hello",helloDirective());
