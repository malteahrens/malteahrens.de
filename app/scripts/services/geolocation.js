'use strict';

/**
 * @ngdoc directive
 * @name angularApp.directive:mouseover
 * @description
 * If there is a value attached to the directive this will be the id for the mouseover action, otherwise it will try to read the id from the translation directive (if present)
 */
var geolocationModule = angular.module('geolocation', ['cordova']);
geolocationModule.factory('getCurrentPosition', function(deviceReady, $document, $window, $rootScope){
        console.log("device ready...");
        return function(done) {
            console.log("function call");
            deviceReady(function(){
                navigator.geolocation.getCurrentPosition(function(position){
                    $rootScope.$apply(function(){
                        done(position);
                    });
                }, function(error){
                    $rootScope.$apply(function(){
                        throw new Error('Unable to retreive position');
                    });
                });
            });
        };
    });