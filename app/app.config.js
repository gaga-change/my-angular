'use strict';

<<<<<<< HEAD
angular.module('phonecatApp')
    .config(['$locationProvider' ,'$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider.when('/phones',{
                template : '<phone-list></phone-list>'
            }).when('/phones/:phoneId',{
                template : '<phone-detail></phone-detail>'
            }).otherwise('/phones');
        }
    ]);
=======
angular.
  module('phonecatApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/phones', {
          template: '<phone-list></phone-list>'
        }).
        when('/phones/:phoneId', {
          template: '<phone-detail></phone-detail>'
        }).
        otherwise('/phones');
    }
  ]);
>>>>>>> 95b8f2abef8802a91a097232d73b8966112041e6
