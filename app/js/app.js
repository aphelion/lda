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
        })
        .state('directory', {
            url: '/directory',
            template: '<organization-directory/>'
        });
});

require('./about_lda_directive');
require('./organization_directory_directive');
