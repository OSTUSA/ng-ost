angular.module('ngost.filters.paged', [])
    .filter('paged', function () {
        return function (input, start, end, notPaged) {
            if ((!angular.isArray(input) || notPaged) || (start > end)) {
                return input;
            }

            return input.slice(start, end);
        };
    });