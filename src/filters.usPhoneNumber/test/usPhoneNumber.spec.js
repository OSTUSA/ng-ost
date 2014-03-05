describe("usPhoneNumber Filter", function () {

    var filter;
    beforeEach(angular.mock.module('nga.filters.usPhoneNumber'));

    beforeEach(inject(function ($filter) {
        filter = $filter('usPhoneNumber');
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

    it('should return "1(555)123-4567" if "15551234567" is supplied', function () {
        expect(filter("15551234567")).toBe('1(555)123-4567');
    });

    it('should return "1(555)123-4567" if "5551234567" is supplied and showCountryCode is true', function () {
        expect(filter("5551234567", true)).toBe('1(555)123-4567');
    });

    it('should return "(555)123-4567" if "5551234567" is supplied', function () {
        expect(filter("5551234567")).toBe('(555)123-4567');
    });

    it('should return "(555)123-4567" if "15551234567" is supplied and showCountryCode is false', function () {
        expect(filter("15551234567", false)).toBe('(555)123-4567');
    });

    it('should return "asdf123" if "asdf123" is supplied', function () {
        expect(filter("asdf123")).toBe('asdf123');
    });

    it('should return "(555)123-4567" if "555-123-4567" is supplied', function () {
        expect(filter("555-123-4567")).toBe('(555)123-4567');
    });

    it('should return "1(555)123-4567" if "555-123-4567" is supplied and showCountryCode is true', function () {
        expect(filter("555-123-4567", true)).toBe('1(555)123-4567');
    });



});
