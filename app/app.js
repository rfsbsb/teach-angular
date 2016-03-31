require("angular");
require("angular-resource");
require("angular-ui-router");
$ = jQuery = require('jquery');
require("bootstrap");

var APP = angular.module('livroApp', ['ui.router', 'ngResource'])
  .config(['$stateProvider', function ($stateProvider) {

    $stateProvider.state('principal', {
      url: '/principal',
      templateUrl: 'app/view/home.html',
      controller: 'PrincipalController'
    }).state('livros', {
      url: '/livros',
      templateUrl: 'app/view/livro/index.html',
      controller: 'LivroController',
      params: {
        'successMessage': null
      }
    }).state('novoLivro', {
      url: '/livros/novo',
      templateUrl: 'app/view/livro/novo.html',
      controller: 'LivroNovoController'
    }).state('editarLivro', {
      url: '/livros/:id/editar',
      templateUrl: 'app/view/livro/editar.html',
      controller: 'LivroEditarController'
    }).state('autores', {
      url: '/autores',
      templateUrl: 'app/view/autor/index.html',
      controller: 'AutorController',
      params: {
        'successMessage': null
      }
    }).state('novoAutor', {
      url: '/autores/novo',
      templateUrl: 'app/view/autor/novo.html',
      controller: 'AutorNovoController'
    }).state('editarAutor', {
      url: '/autores/:id/editar',
      templateUrl: 'app/view/autor/editar.html',
      controller: 'AutorEditarController'
    });
  }])
  .run(['$state', function($state) {
    $state.go('autores');
  }]);

require("./controllers/autor.js");
require("./controllers/livro.js");
require("./controllers/principal.js");
require("./directives/directives");
require("./services/autor");
require("./services/livro");