describe("truncate Filter", function () {

    var filter;
    beforeEach(angular.mock.module('ngOst.filters.truncate'));


    beforeEach(inject(function ($filter) {
        filter = $filter('truncate');
    }));

    it('should be registered in the filterService', function () {
        expect(filter).not.toBeNull();
    });

    it('should return same value if input is not a string', function () {
        expect(filter(5)).toBe(5);
    });

    it('should return null if a null value is supplied', function () {
        expect(filter(null)).toBeNull();
    });

    it('should return undefined if an undefined value is supplied', function () {
        expect(filter(undefined)).toBeUndefined();
    });

    it('should return the same string if no length is supplied and the input is less than 25', function () {
        var filteredValue = filter("TEST");
        expect(filteredValue).toBe("TEST");
        expect(filteredValue.length).toBe("TEST".length);
    });

    it('should return the same string if under the supplied length', function () {
        var filteredValue = filter("TEST", 10);
        expect(filteredValue).toBe("TEST");
        expect(filteredValue.length).toBe(4);
    });

    it('should return a truncated string of 25 characters if no length is supplied', function () {
        var filteredValue = filter("THIS IS A STRING THAT IS LONGER THAN 25 CHARACTERS");
        expect(filteredValue).toBe("THIS IS A STRING THAT ...");
        expect(filteredValue.length).toBe(25);
    });

    it('should return a truncated string with the length of the supplied length', function () {
        var filteredValue = filter("THIS IS A STRING THAT IS LONGER THAN 25 CHARACTERS", 23, '.. more');
        expect(filteredValue).toBe("THIS IS A STRING.. more");
        expect(filteredValue.length).toBe(23);
    });

    it('should return a truncated string of 25 characters ending in the supplied end value if no length is supplied', function () {
        var filteredValue = filter("THIS IS A STRING THAT IS LONGER THAN 25 CHARACTERS", 23, '.. more');
        expect(filteredValue).toBe("THIS IS A STRING.. more");
        expect(filteredValue.length).toBe(23);
    });

    it('should return a truncated string with the length ending in the supplied end value of the supplied length', function () {
        var filteredValue = filter("THIS IS A STRING THAT IS LONGER THAN 25 CHARACTERS", 10, '.. more');
        expect(filteredValue).toBe("THI.. more");
        expect(filteredValue.length).toBe(10);
    });

    it('should throw an error if the supplied end value length is greater than the supplied length', function() {
        expect(function() {filter("A", 3, 'REALLY LONG END VALUE');}).toThrow();
    });



});
