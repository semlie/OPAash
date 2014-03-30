'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]).directive('mainMenu', function() {
    return {
      restrict: 'E',
      templateUrl: 'partials/top-nev-bar.html'
    };
  }).directive('mainBody', function() {
    return {
      restrict: 'E',
      templateUrl: 'partials/main.html'
    };
  });