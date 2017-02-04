const angular = require("angular");
const app=angular.module("app",[]);

const helloDirective = require("./directives/hello/kvHelloDirective");
const frontController = require("./controllers/front/frontController");

app
    .controller('mainController',frontController())
    .directive("hello",helloDirective())
    .controller('PhoneListCtrl', function PhoneListCtrl($scope) {
        $scope.phones = [
            {'name': 'Nexus S',
                'snippet': 'Fast just got faster with Nexus S.'},
            {'name': 'Motorola XOOM™ with Wi-Fi',
                'snippet': 'The Next, Next Generation tablet.'},
            {'name': 'MOTOROLA XOOM™',
                'snippet': 'The Next, Next Generation tablet.'}
        ];
        $scope.hello = "Hello World";
    });

module.exports = function(){
    return app;
}

