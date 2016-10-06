'use strict';

//Define the 'phonecatApp' module
var phonecatApp = angular.module('phonecatApp',[
    // ...which depends on the `phoneList` module
    'ngRoute',
    'phoneDetail',
    'phoneList',
    'core'
]);
