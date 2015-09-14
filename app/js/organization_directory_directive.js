angular.module('lda').directive('organizationDirectory', function () {
    return {
        restrict: 'E',
        template:
            '<ul>' +
            '   <li>first item</li>' +
            '   <li>second item</li>' +
            '</ul>'
    };
});
