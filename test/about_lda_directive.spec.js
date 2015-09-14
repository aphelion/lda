describe('about LDA directive', function () {
    var $compile,
        $rootScope;

    beforeEach(module('lda'));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('contains text introducing the LDA', function () {
        var element = $compile('<about-lda></about-lda>')($rootScope);
        $rootScope.$digest();
        expect(element.html()).toContain('We love dance.');
    });
});
