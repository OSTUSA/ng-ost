angular.module('ngost.filters.blankData', [])
    .filter('blankData', [function () {
        return function (input, placeholder) {
            if (input !==0 && !input) {
                return placeholder || '-';
            }

            return input;
        };
    }]);
