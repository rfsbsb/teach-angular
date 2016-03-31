angular.module('livroApp').factory("LivroService", ['$resource', function($resource) {
  return $resource('http://localhost:8080/livros/api/livros/:id', {id:'@_id'},{
    update: {
      method  : 'PUT',
      url     : 'http://localhost:8080/livros/api/livros/:id',
      params  : { id: '@id' },
      isArray : false
    }
  });
}]);