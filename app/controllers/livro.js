angular.module('livroApp').controller('LivroController', ['$scope', '$state', '$stateParams', 'LivroService', function($scope, $state, $stateParams, LivroService) {
  $scope.livros = LivroService.query();
  $scope.successMessage = $stateParams.successMessage;
}]);

angular.module('livroApp').controller('LivroNovoController', ['$scope', '$state', '$stateParams', 'LivroService', 'AutorService', function($scope, $state, $stateParams, LivroService, AutorService) {
  $scope.livro = new LivroService();
  $scope.autores = AutorService.query();

  $scope.criarLivro = function() {
    $scope.livro.$save(
      function() {
        $state.go('livros', {'successMessage': "Livro criado com sucesso!"});
      }, function() {
        $scope.errorMessage = "Ocorreu um erro no servidor. Verifique se todos os campos foram preenchidos corretamente.";
      }
    );
  };
}]);

angular.module('livroApp').controller('LivroEditarController', ['$scope', '$state', '$stateParams', 'LivroService', 'AutorService', function($scope, $state, $stateParams, LivroService, AutorService) {
  $scope.livro = LivroService.get({ id: $stateParams.id });
  $scope.autores = AutorService.query();

  $scope.atualizarLivro = function() {
    $scope.livro.$update(
      function() {
        $state.go('livros', {'successMessage': "Livro atualizado com sucesso!"});
      }, function() {
        $scope.errorMessage = "Ocorreu um erro no servidor. Verifique se todos os campos foram preenchidos corretamente.";
      }
    );
  };
}]);