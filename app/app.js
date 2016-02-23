var APP = angular.module('livroApp', ['ui.router', 'ngResource'])
  .config(function ($stateProvider) {

    $stateProvider.state('principal', {
      url: '/principal',
      templateUrl: 'app/view/home.html',
      controller: 'PrincipalController'
    }).state('livros', {
      url: '/livros',
      templateUrl: 'app/view/livro/index.html',
      controller: 'LivroController'
    }).state('autores', {
      url: '/autores',
      templateUrl: 'app/view/autor/index.html',
      controller: 'AutorController'
    }).state('novoAutor', {
      url: '/autores/novo',
      templateUrl: 'app/view/autor/novo.html',
      controller: 'AutorNovoController'
    }).state('editarAutor', {
      url: '/autores/:id/editar',
      templateUrl: 'app/view/autor/editar.html',
      controller: 'AutorEditarController'
    });
  })
  .run(function($state) {
    $state.go('autores');
  });

