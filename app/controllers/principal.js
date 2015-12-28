APP.controller('PrincipalController', function(LivrosService) {
    var principal = this;
    LivrosService.todos().
        then(function(livros){
            principal.listaDeLivros = livros.lista;
        });
});