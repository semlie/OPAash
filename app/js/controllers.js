'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope','$http',function($scope,$http) {
        
                    $http.get('js/data/ashira.json').success(function(data) {
                        $scope.movies = data;
                    });
                
  }])
  .controller('MyCtrl2', [function() {

  }])
  .controller('MyCtrl3`', [function() {

  }])
  .controller('MyCtrl3`', [function() {

  }]);
  