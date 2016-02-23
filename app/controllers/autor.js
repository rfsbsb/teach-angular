APP.controller('AutorController', function($scope, $state, $stateParams, AutorService) {
  $scope.autores = AutorService.query();
});

APP.controller('AutorNovoController', function($scope, $state, $stateParams, AutorService) {
  $scope.author = new AutorService();

  $scope.criarAutor = function() {
    $scope.author.$save(function() {
      $state.go('autores');
    });
  };
});

APP.controller('AutorEditarController', function($scope, $state, $stateParams, AutorService) {
  $scope.author = AutorService.get({ id: $stateParams.id });

  $scope.atualizarAutor = function() {
    $scope.author.$update(function() {
      $state.go('autores');
    });
  };
});