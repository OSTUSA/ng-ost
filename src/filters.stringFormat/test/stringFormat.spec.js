describe("stringFormat Filter", function () {

    var filter;
    beforeEach(angular.mock.module('nga.filters.stringFormat'));

    beforeEach(inject(function ($filter) {
        filter = $filter('stringFormat');
    }));

    it('should be registered in the filterService', function () {
        expect(filter).not.toBe(null);
    });

    it('should return undefined if an undefined value is supplied', function () {
        expect(filter(undefined)).toBeUndefined();
    });

    //
    it('should replace all tokens which are matched with their replacement value in the replacements array', function () {
        var testString ='{0}, {1}, {2}';
        expect(filter(testString, ['value1', 'value2', 'value3'])).toBe('value1, value2, value3');
    });
    it('should replace all tokens which are matched with their replacement value in the arguments object', function () {
        expect(filter('{0}, {1}, {2}', 'value1', 'value2', 'value3')).toBe('value1, value2, value3');
    });

    it('should allow tokens which are not matched should be retained in the out', function () {
        expect(filter('{0}, {1}, {2}, {3}', 'value1', 'value2', 'value3')).toBe('value1, value2, value3, {3}');
    });

    it('should allow the same token to appear in multiple locations', function () {
        expect(filter('{0}, {1}, {2}, {0}', 'value1', 'value2', 'value3')).toBe('value1, value2, value3, value1');
    });


});
