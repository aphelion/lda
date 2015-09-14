describe('organization directory directive', function () {
    var $compile,
        $rootScope;

    beforeEach(module('lda'));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('contains a list of all the organizations', function () {
        var element = $compile('<organization-directory></organization-directory>')($rootScope);
        $rootScope.$digest();
        expect(element).toContainElement('ul');
    });
});
