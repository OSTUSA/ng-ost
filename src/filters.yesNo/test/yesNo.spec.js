describe("yesNo Filter", function () {

    var filter;
    beforeEach(angular.mock.module('nga.filters.yesNo'));

    beforeEach(inject(function ($filter) {
        filter = $filter('yesNo');
    }));

    it('should be registered in the filterService', function () {
        expect(filter).not.toBe(null);
    });

     it('should return null if null is supplied', function () {
        expect(filter(null)).toBeNull();
    });
    it('should return undefined if undefined is supplied', function () {
        expect(filter(undefined)).toBeUndefined();
    });
    it('should return "no" if undefined is supplied and forceFalse is true', function () {
        expect(filter(undefined, true)).toBe('no');
    });
    it('should return "no" if null is supplied and forceFalse is true', function () {
        expect(filter(null, true)).toBe('no');
    });
    it('should return "yes" if true is supplied', function () {
        expect(filter(true)).toBe('yes');
    });
    it('should return "yes" if "true" is supplied', function () {
        expect(filter('true')).toBe('yes');
    });
    it('should return "yes" if "yes" is supplied', function () {
        expect(filter('yes')).toBe('yes');
    });
    it('should return "yes" if "1" is supplied', function () {
        expect(filter('1')).toBe('yes');
    });
    it('should return "yes" if 1 is supplied', function () {
        expect(filter(1)).toBe('yes');
    });
    it('should return "no" if true is supplied', function () {
        expect(filter(false)).toBe('no');
    });
    it('should return "no" if "false" is supplied', function () {
        expect(filter('false')).toBe('no');
    });
    it('should return "no" if "no" is supplied', function () {
        expect(filter('no')).toBe('no');
    });
    it('should return "no" if "0" is supplied', function () {
        expect(filter('0')).toBe('no');
    });
    it('should return "no" if 0 is supplied', function () {
        expect(filter(0)).toBe('no');
    });






});
