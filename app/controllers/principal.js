APP.controller('PrincipalController', function ($scope, LivroService) {
  $scope.livros = LivroService.query();
});