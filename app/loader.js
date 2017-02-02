var angular = require("angular");
var app=angular.module("app",[]);
app.controller('PhoneListCtrl', ['$scope', function($scope){
    $scope.phones = [
        {name: "Nexus S", snippet: "Fast..."},
        {name: "Motorola XOOM...", snippet: "The Next...."},
        {name: "MOTOROLA XOOM...", snippet: "The Next, Next..."}
    ];
}]);

module.exports = function(){
    return app;
}