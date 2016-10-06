'use strict';

angular.module('phoneDetail')
    .component('phoneDetail', {
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


        }]
    });