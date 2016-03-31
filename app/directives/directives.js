angular.module('livroApp').directive('serTooltip', function() {
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

angular.module('livroApp').directive("serBrasil", function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      scope.nacionalidade = attrs.valor;
      if (scope.nacionalidade == "Brasil") {
        element.css('color', "green");
        element.css('font-weight', "bold");
      }
    },
    template: '<div>{{nacionalidade}}</div>'
  }
});

angular.module('livroApp').directive("navbarActive", ['$location', function(location) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      var clazz = "active";
      var path = element.children().attr('href').substring(1);
      scope.location = location;
      scope.$watch('location.path()', function (newPath) {
        newPath = newPath.split("/")[1];
        if (path === newPath) {
          element.addClass(clazz);
        } else {
          element.removeClass(clazz);
        }
      });
    }
  };
}]);