'use strict';

//Register `phoneList` component, along with its associated controller and template
angular.
    module('phoneList').
    component('phoneList',{
        templateUrl: 'phone-list/phone-list.template.html',
        controller :  ['Phone',function (Phone) {
            var self = this;
            self.orderPorp = 'age';
            self.mode = '+';
            //$http.get('phones/phones.json').then(function (response) {
            //   self.phones = response.data;
            //});
            self.phones = Phone.query();
        }]
    });