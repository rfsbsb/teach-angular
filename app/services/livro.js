APP.factory("LivroService", function($resource) {
  return $resource('http://localhost:3000/books/:id.json', {id:'@_id'},{
    update: {
      method  : 'PUT',
      url     : 'http://localhost:3000/books/:id.json',
      params  : { id: '@id' },
      isArray : false
    }
  });
});