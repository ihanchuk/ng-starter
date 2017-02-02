var app = require("./loader")();
const helloDirective = require("./directives/hello/kvHelloDirective");
const frontController = require("./controllers/front/frontController");

if (TEST_ENV) {
    console.log("************** RUNING ANGULAR TESTS *************");
    require("angular-mocks/angular-mocks");
}
app
    .controller('mainController',frontController())
    .directive("hello",helloDirective());
