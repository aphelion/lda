require('angular');
window.jQuery = require('jquery');
require('bootstrap-sass');

var app = angular.module('lda', [
    require('angular-ui-router')
]);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state('home', {
            url: '/',
            template: '<about-lda/>'
        });
});

require('./about_lda_directive');
