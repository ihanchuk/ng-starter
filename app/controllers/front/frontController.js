module.exports = function(){
   return ['$scope', function($scope) {
       $scope.controllerName = 'Front Controller';
       $scope.greeting = function(){
           alert("I am working fine!");
       }
   }];
}


