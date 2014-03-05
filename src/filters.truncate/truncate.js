angular.module('nga.filters.truncate', [])
    .filter('truncate', [function () {
        return function (input, length, end) {
            if (!input || !angular.isString(input)) {
                return input;
            }

            if (isNaN(length)) {
                length = 25; //default to 25 char
            }

            if (end === undefined) {
                end = '...'; //default to ... for the end chars
            }

            if(end.length > length) {
                throw new Error('length cannot be less than end.length');
            }

            if (input.length > length || input.length - end.length > length) {
                return input.substring(0, length - end.length) + end;
            }

            return input;
        };
    }]);
