APP.factory("AutorService", function($resource) {
  return $resource('http://localhost:3000/authors/:id.json', {id:'@_id'},{
    update: {
      method  : 'PUT',
      url     : 'http://localhost:3000/authors/:id.json',
      params  : { id: '@id' },
      isArray : false
    }
  });
});