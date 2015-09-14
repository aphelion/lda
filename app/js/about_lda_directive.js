angular.module('lda').directive('aboutLda', function () {
    return {
        restrict: 'E',
        replace: true,
        template: '<h1>We love dance.</h1>'
    };
});
