angular.module('livroApp').factory("AutorService", ['$resource', function($resource) {
  return $resource('http://localhost:8080/livros/api/autores/:id', {id:'@_id'},{
    update: {
      method  : 'PUT',
      url     : 'http://localhost:8080/livros/api/autores/:id',
      params  : { id: '@id' },
      isArray : false
    }
  });
}]);