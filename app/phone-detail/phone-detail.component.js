'use strict';

angular.module('phoneDetail')
    .component('phoneDetail', {
        template: 'TBD : Detail View for <span> {{$ctrl.phoneId}}</span>',
        controller: ['$routeParams', function ($routeParams) {
            this.phoneId = $routeParams.phoneId;
        }]
    });