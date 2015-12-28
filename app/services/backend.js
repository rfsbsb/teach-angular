APP.factory("LivrosService", function($q, $http) {
    return {
        todos: function() {
            var deferred = $q.defer();
            $http.get('http://master.webphp.com.br/s/bn')
                .success(function(data) {
                    deferred.resolve({
                        lista: data
                    });
                });
            return deferred.promise;
        },
        buscar: function(nome) {
            var deferred = $q.defer();
            $http.get("http://master.webphp.com.br/s/bn?title=" + nome)
                .success(function(data){
                   deferred.resolve({
                       lista: data
                   });
                });
            return deferred.promise;
        }

    };
});