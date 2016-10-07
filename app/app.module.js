'use strict';

//Define the 'phonecatApp' module
var phonecatApp = angular.module('phonecatApp',[
    // ...which depends on the `phoneList` module
    'ngRoute',
    'phoneDetail',
<<<<<<< HEAD
    'phoneList'
=======
    'phoneList',
    'core',
    'ngAnimate'
>>>>>>> 95b8f2abef8802a91a097232d73b8966112041e6
]);
