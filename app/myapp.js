/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

var app = angular.module("myApp",[]).controller("Mycont",['$scope','$http',function ($scope,$http) //angular 
    {
        $http.get('category_data.json').success(function(data) {
                        $scope.all_cat = data;
        });
    }]);
