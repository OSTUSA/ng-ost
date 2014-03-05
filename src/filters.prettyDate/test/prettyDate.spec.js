describe("prettyDate Filter", function () {

    var filter;
    beforeEach(angular.mock.module('ngOst.filters.prettyDate'));

    beforeEach(inject(function ($filter) {
        filter = $filter('prettyDate');
    }));

    it('should be registered in the filterService', function () {
        expect(filter).not.toBe(null);
    });

    it('should return null if a null value is supplied', function () {
        expect(filter(null)).toBeNull();
    });

    it('should return undefined if an undefined value is supplied', function () {
        expect(filter(undefined)).toBeUndefined();
    });


    it('should return the supplied value if an non string value is supplied', function () {
        var testValue = {"TEST": 1};
        expect(filter(testValue)).toBe(testValue);
    });
//
//    it('should return "just now" if the supplied value is less than 60 seconds old ', function () {
//        var testValue = new Date().valueOf();
//        testValue = new Date(testValue += -1500);
//        expect(filter(testValue.toISOString())).toBe('just now');
//    });
//    it('should return "1 minute ago" if the supplied value is greater than 1 minute old ', function () {
//        var testValue = new Date().valueOf();
//        testValue = new Date(testValue += -60000);
//        expect(filter(testValue.toISOString())).toBe('1 minute ago');
//    });
//    it('should return "x minutes ago" if the supplied value is greater than x minutes old', function () {
//        var testValue = new Date().valueOf();
//        testValue = new Date(testValue += (-60000 * 3));
//        expect(filter(testValue.toISOString())).toBe('3 minutes ago');
//    });
//    it('should return "1 hours ago the supplied value is less greater x hour old', function () {
//        var testValue = new Date().valueOf();
//        testValue = new Date(testValue += -3600000);
//        expect(filter(testValue.toISOString())).toBe('1 hour ago');
//    });
//    it('should return "x hours ago" if the supplied value is greater than x hours old', function () {
//        var testValue = new Date().valueOf();
//        testValue = new Date(testValue += (-3600000 * 3));
//        expect(filter(testValue.toISOString())).toBe('3 hours ago');
//    });
//    it('should return "1 day ago" if the supplied value is 1 day old', function () {
//        var testValue = new Date().valueOf();
//        testValue = new Date(testValue += -(3600000 * 24));
//        expect(filter(testValue.toISOString())).toBe('1 day ago');
//    });
//    it('should return "x days ago" if the supplied value is greater than x days old', function () {
//        var testValue = new Date().valueOf();
//        testValue = new Date(testValue += (-3600000 * 72));
//        expect(filter(testValue.toISOString())).toBe('3 days ago');
//    });
//    it('should return "1 week ago" if the supplied value is 1 week old', function () {
//        var testValue = new Date().valueOf();
//        testValue = new Date(testValue += (-86400000 * 7));
//        expect(filter(testValue.toISOString())).toBe('1 week ago');
//    });
//    it('should return "x weeks ago" if the supplied value is greater than x weeks old', function () {
//        var testValue = new Date().valueOf();
//        testValue = new Date(testValue += (-86400000 * 21));
//        expect(filter(testValue.toISOString())).toBe('3 weeks ago');
//    });
//    it('should return "1 month ago" if the supplied value is 1 month old', function () {
//        var testValue = new Date().valueOf();
//        testValue = new Date(testValue += (-86400000 * 31));
//        expect(filter(testValue.toISOString())).toBe('1 month ago');
//    });
//    it('should return "x months ago" if the supplied value is greater than x months old', function () {
//        var testValue = new Date().valueOf();
//        testValue = new Date(testValue += (-86400000 * 93));
//        expect(filter(testValue.toISOString())).toBe('3 months ago');
//    });
//    it('should return "1 year ago" if the supplied value is 1 year old', function () {
//        var testValue = new Date().valueOf();
//        testValue = new Date(testValue += (-86400000 * 365));
//        expect(filter(testValue.toISOString())).toBe('1 year ago');
//    });
//    it('should return "x years ago" if the supplied value is greater than x years old', function () {
//        var testValue = new Date().valueOf();
//        testValue = new Date(testValue += (-86400000 * 1095));
//        expect(filter(testValue.toISOString())).toBe('3 years ago');
//    });
});
