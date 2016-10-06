'use strict';

angular.module('phoneDetail')
    .component('phoneDetail', {
        templateUrl: "phone-detail/phone-detail.template.html",
        controller: ['$routeParams','$http', function ($routeParams,$http) {
            //this.phoneId = $routeParams.phoneId;
            var self = this;

            $http.get('phones/'+$routeParams.phoneId+".json").then(function(res){
                self.phone=res.data;
            });
        }]
    });