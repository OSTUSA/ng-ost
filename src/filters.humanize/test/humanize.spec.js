describe('Humanize Filter', function () {
    var filter;
    beforeEach(angular.mock.module('nga.filters.humanize'));

    beforeEach(inject(function ($filter) {
        filter = $filter('humanize');
    }));

    it('should be registered in the filterService', function () {
        expect(filter).not.toBe(null);
    });
});