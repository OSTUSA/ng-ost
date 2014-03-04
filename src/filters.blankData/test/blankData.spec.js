describe('blankData Filter', function () {

    var filter;
    beforeEach(angular.mock.module('ngost.filters.blankData'));

    beforeEach(inject(function ($filter) {
        filter = $filter('blankData');
    }));

    it('should be registered in the filterService', function () {
        expect(filter).not.toBe(null);
    });

    it('should return a "-" for undefined values', function () {
        expect(filter(undefined)).toBe('-');
    });

    it('should return a "NO DATA" for undefined values if "NO DATA" is supplied as the placeholder', function () {
        expect(filter(undefined, 'NO DATA')).toBe('NO DATA');
    });

    it('should return a "-" for null values', function () {
        expect(filter(null)).toBe('-');
    });

    it('should return a "NO DATA" for null values if "NO DATA" is supplied as the placeholder', function () {
        expect(filter(null, 'NO DATA')).toBe('NO DATA');
    });

    it('should return the same value if the supplied value is not "NULL" or "undefined"', function () {
        expect(filter('DATA')).toBe('DATA');
    });


});