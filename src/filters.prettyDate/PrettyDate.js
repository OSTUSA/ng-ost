angular.module('ngost.filters.prettyDate', [])
    .filter('prettyDate', [function () {
        return function (input) {

            if (!input || !angular.isString(input)) {
                return input;
            }

            var time_formats = [
                [60, 'just now'],
                [90, '1 minute'],
                [3600, 'minutes', 60],
                [5400, '1 hour'],
                [86400, 'hours', 3600],
                [129600, '1 day'],
                [604800, 'days', 86400],
                [907200, '1 week'],
                [2628000, 'weeks', 604800],
                [3942000, '1 month'],
                [31536000, 'months', 2628000],
                [47304000, '1 year'],
                [3153600000, 'years', 31536000]
            ];

            var time = ('' + input).replace(/-/g, '/').replace(/[TZ]/g, ' '),
                dt = new Date(),
                seconds = ((dt - new Date(time) + (dt.getTimezoneOffset() * 60000)) / 1000),
                token = ' ago',
                i = 0,
                format;

            if (seconds < 0) {
                seconds = Math.abs(seconds);
                token = '';
            }

            while (format = time_formats[i++]) {
                if (seconds < format[0]) {
                    if (format.length === 2) {
                        return format[1] + (i > 1 ? token : '');
                    } else {
                        return Math.round(seconds / format[2]) + ' ' + format[1] + (i > 1 ? token : '');
                    }
                }
            }

            return input;
        };
    }]);
