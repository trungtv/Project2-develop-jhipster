(function() {
    'use strict';

    angular
        .module('vtravelApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', 'Principal', 'LoginService', '$state', 'findall', 'findiddesc'];

    function HomeController ($scope, Principal, LoginService, $state, findall, findiddesc) {
        var vm = this;

        //
        vm.findall = findall;
        vm.findiddesc = findiddesc;

        vm.account = null;
        vm.isAuthenticated = null;
        vm.login = LoginService.open;
        vm.register = register;
        $scope.$on('authenticationSuccess', function() {
            getAccount();
        });

        getAccount();

        function getAccount() {
            Principal.identity().then(function(account) {
                vm.account = account;
                vm.isAuthenticated = Principal.isAuthenticated;
            });
        }
        function register () {
            $state.go('register');
        }
    }
})();
