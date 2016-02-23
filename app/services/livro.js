APP.factory("LivroService", function($q, $http) {
  return {
    listar: function() {
      var deferred = $q.defer();
      $http.get('http://localhost:3000/books.json')
        .success(function(data) {
          deferred.resolve({
            autores: data
          });
        });
      return deferred.promise;
    },
    incluir: function(campos) {
      var deferred = $q.defer();
      $http.post("http://localhost:3000/books.json", campos)
        .success(function(data){
          deferred.resolve({
            autor: data
          });
        });
      return deferred.promise;
    },
    editar: function(campos) {
      var deferred = $q.defer();
      $http.put("http://localhost:3000/books.json", campos)
        .success(function(data){
          deferred.resolve({
            livro: data
          });
        });
      return deferred.promise;
    }

  };
});