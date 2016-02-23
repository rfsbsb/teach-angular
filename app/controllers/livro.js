APP.controller('LivroController', function($scope, $state, $stateParams, LivroService) {
  $scope.livros = LivroService.query();
});

APP.controller('LivroNovoController', function($scope, $state, $stateParams, LivroService, AutorService) {
  $scope.book = new LivroService();
  $scope.autores = AutorService.query();

  $scope.criarLivro = function() {
    $scope.book.$save(function() {
      $state.go('livros');
    });
  };
});

APP.controller('LivroEditarController', function($scope, $state, $stateParams, LivroService, AutorService) {
  $scope.book = LivroService.get({ id: $stateParams.id });
  $scope.autores = AutorService.query();

  $scope.atualizarLivro = function() {
    $scope.book.$update(function() {
      $state.go('livros');
    });
  };
});