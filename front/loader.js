const angular = require("angular");
const app=angular.module("app",[]);

const helloDirective = require("./directives/hello/kvHelloDirective");
const frontController = require("./controllers/front/frontController");

app
    .controller('mainController',frontController())
    .directive("hello",helloDirective());

module.exports = function(){
    return app;
}

