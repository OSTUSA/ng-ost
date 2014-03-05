angular.module('ngOst.filters.humanize', [])
    .filter('humanize', [function() {
        function words(input) {
            return input.replace(/^([a-z])|\s+([a-z])/g, function ($1) {
                return $1.toUpperCase();
            });
        }

        function shatter(input, separator) {
            return input.replace(/[A-Z]/g, function (match) {
                return separator + match;
            });
        }

        return function (input) {
            if(!angular.isString(input)) {
                return input;
            }

            return words(shatter(input, ' ').split('_').join(' '));
        };
    }]);