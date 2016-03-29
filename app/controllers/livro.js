APP.controller('LivroController', function($scope, $state, $stateParams, LivroService) {
  $scope.livros = LivroService.query();
});

APP.controller('LivroNovoController', function($scope, $state, $stateParams, LivroService, AutorService) {
  $scope.livro = new LivroService();
  $scope.autores = AutorService.query();

  $scope.criarLivro = function() {
    $scope.livro.$save(function() {
      $state.go('livros');
    });
  };
});

APP.controller('LivroEditarController', function($scope, $state, $stateParams, LivroService, AutorService) {
  $scope.livro = LivroService.get({ id: $stateParams.id });
  $scope.autores = AutorService.query();

  $scope.atualizarLivro = function() {
    $scope.livro.$update(function() {
      $state.go('livros');
    });
  };
});