var angular = require("angular");
var mocks =require("angular-mocks/angular-mocks");
var app = require("../../loader");

describe('phoneApp controllers', function() {
    beforeEach(angular.mock.module('app'));
    describe('PhoneListCtrl', function() {
        it('should create "phones" model with 3 phones',
            inject(function($rootScope, $controller) {
                var scope = $rootScope.$new(),
                    ctrl = $controller("PhoneListCtrl", {$scope: scope });
                    expect(scope.phones.length).to.be.equal(3);
            }));
    });
});