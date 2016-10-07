'use strict';

angular.module('phoneDetail')
    .component('phoneDetail', {
<<<<<<< HEAD
        template: 'TBD : Detail View for <span> {{$ctrl.phoneId}}</span>',
        controller: ['$routeParams', function ($routeParams) {
            this.phoneId = $routeParams.phoneId;
=======
        templateUrl: "phone-detail/phone-detail.template.html",
        controller: ['$routeParams','Phone', function ($routeParams,Phone) {
            //this.phoneId = $routeParams.phoneId;
            var self = this;
            self.setImage = function(imgUrl){
                self.phone.mainImageUrl = imgUrl;
            };

            self.phone = Phone.get({phoneId: $routeParams.phoneId},function(phone){
               self.setImage(phone.images[0]);
            });

            //$http.get('phones/'+$routeParams.phoneId+".json").then(function(res){
            //    self.phone=res.data;
            //    self.setImage(self.phone.images[0]);
            //});


>>>>>>> 95b8f2abef8802a91a097232d73b8966112041e6
        }]
    });