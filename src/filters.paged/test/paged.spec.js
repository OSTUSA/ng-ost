describe('paged Filter', function () {

    var filter;
    beforeEach(angular.mock.module('ngost.filters.paged'));

    beforeEach(inject(function ($filter) {
        filter = $filter('paged');
    }));

    it('should be registered in the filterService', function () {
        expect(filter).not.toBe(null);
    });

});