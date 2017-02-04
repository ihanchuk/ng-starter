var app = require("./loader")();
const helloDirective = require("./directives/hello/kvHelloDirective");
const frontController = require("./controllers/front/frontController");
app
    .controller('mainController',frontController())
    .directive("hello",helloDirective());
