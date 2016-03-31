angular.module('livroApp').controller('AutorController', ['$scope', '$state', '$stateParams', 'AutorService', function($scope, $state, $stateParams, AutorService) {
  $scope.autores = AutorService.query();
  $scope.successMessage = $stateParams.successMessage;
}]);

angular.module('livroApp').controller('AutorNovoController', ['$scope', '$state', '$stateParams', 'AutorService', function($scope, $state, $stateParams, AutorService) {
  $scope.autor = new AutorService();

  $scope.criarAutor = function() {
    $scope.autor.$save(
      function() {
        $state.go('autores', {'successMessage': "Autor criado com sucesso!"});
      },
      function() {
        $scope.errorMessage = "Ocorreu um erro no servidor. Verifique se todos os campos foram preenchidos corretamente.";
      }
    );
  };
}]);

angular.module('livroApp').controller('AutorEditarController', ['$scope', '$state', '$stateParams', 'AutorService', function($scope, $state, $stateParams, AutorService) {
  $scope.autor = AutorService.get({ id: $stateParams.id });

  $scope.atualizarAutor = function() {
    $scope.autor.$update(
      function() {
        $state.go('autores', {'successMessage': "Autor atualizado com sucesso!"});
      }, function() {
        $scope.errorMessage = "Ocorreu um erro no servidor. Verifique se todos os campos foram preenchidos corretamente.";
      }
    );
  };
}]);