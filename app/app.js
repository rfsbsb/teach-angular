var APP = angular.module('meuApp', ['ngRoute'])
    .config(function($routeProvider) {

        $routeProvider
            .when('/', {
                controller:'PrincipalController as principal',
                templateUrl:'app/view/principal.html'
            })
            .when('/segundo/', {
                controller:'SegundoController as segundo',
                templateUrl:'app/view/segundo.html'
            })
            .otherwise({
                redirectTo:'/'
            });
    }
);

