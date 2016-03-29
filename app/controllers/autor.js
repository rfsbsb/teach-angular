APP.controller('AutorController', function($scope, $state, $stateParams, AutorService) {
  $scope.autores = AutorService.query();
});

APP.controller('AutorNovoController', function($scope, $state, $stateParams, AutorService) {
  $scope.autor = new AutorService();

  $scope.criarAutor = function() {
    $scope.autor.$save(
      function() {
        $state.go('autores');
      },
      function() {
        $scope.errorMessage = "Ocorreu um erro no servidor. Verifique se todos os campos foram preenchidos corretamente.";
      }
    );
  };
});

APP.controller('AutorEditarController', function($scope, $state, $stateParams, AutorService) {
  $scope.autor = AutorService.get({ id: $stateParams.id });

  $scope.atualizarAutor = function() {
    $scope.autor.$update(
      function() {
        $state.go('autores');
      }, function() {
        $scope.errorMessage = "Ocorreu um erro no servidor. Verifique se todos os campos foram preenchidos corretamente.";
      }
    );
  };
});