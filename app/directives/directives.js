APP.directive('serTooltip', function() {
  return {
    restrict: 'E',
    replace: 'true',
    link: function(scope, element, attrs) {
      scope.nome = attrs.nome;
      scope.nacionalidade = attrs.nacionalidade;
      $(element).hover(function(){
        $(element).tooltip('show');
      }, function(){
        $(element).tooltip('hide');
      });
    },
    template: '<span data-toggle="tooltip" data-placement="top" title="{{nacionalidade}}">{{nome}}</span>'
  };
});