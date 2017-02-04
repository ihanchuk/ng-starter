var angular = require("angular");
var mocks =require("angular-mocks/angular-mocks");
var app = require("../../../front/loader");

    describe('ng Olive controllers test', function() {
            beforeEach(angular.mock.module('app'));
            describe('mainController', function() {
                    it('should have property "controllerName" in $scope',
                            inject(function($rootScope, $controller) {
                                    var scope = $rootScope.$new(),
                                           ctrl = $controller("mainController", {$scope: scope });
                                        expect(scope.controllerName).to.be.ok;
                            }));
                
                    it('should have property "controllerName"with length > 5',
                        inject(function($rootScope, $controller) {
                            var scope = $rootScope.$new(),
                                ctrl = $controller("mainController", {$scope: scope });
                            expect(scope.controllerName.length > 5).to.be.true;
                        }));
                
                });
    });