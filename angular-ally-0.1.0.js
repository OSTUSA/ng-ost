/*
 * angular-ally
 * http://angular-ally.github.io

 * Version: 0.1.0 - 2014-02-04
 * License: 
 */
angular.module("nga", ["nga.filters.blankData","nga.filters.prettyDate","nga.filters.stringFormat","nga.filters.truncate","nga.filters.usPhoneNumber","nga.filters.yesNo"]);
angular.module('nga.filters.blankData', [])
    .filter('blankData', [function () {
        return function (input, placeholder) {
            if (!input) {
                return placeholder || '-';
            }

            return input;
        };
    }]);

angular.module('nga.filters.prettyDate', [])
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

angular.module('nga.filters.stringFormat', [])
    .filter('stringFormat', [function () {
        return function (input, replacements) {

            if(!input && !angular.isString(input)) {
                return input;
            }

            var formatted = input;
            var stringReplacements=[];

            if(angular.isArray(replacements)) {
                stringReplacements = replacements;
            } else {
                for(var i=1;i < arguments.length; i++) {
                    stringReplacements.push(arguments[i]);
                }
            }

            for (var x = 0; x < stringReplacements.length; x++) {
                var regexp = new RegExp('\\{' + x + '\\}', 'gi');
                formatted = formatted.replace(regexp, stringReplacements[x]);
            }

            return formatted;
        };
    }]);
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

angular.module('nga.filters.usPhoneNumber', [])
    .filter('usPhoneNumber', [function () {
        return function (input, showCountryCode) {
            if (!input) {
                return input;
            }

            var cleanedText = input.replace(/[^\d]/g, '');

            if(cleanedText.length === 10 && showCountryCode) {
                cleanedText = '1' + cleanedText;
            }

            if(cleanedText.length === 11 && !showCountryCode && showCountryCode === false) {
                cleanedText = cleanedText.substring(1,11);
            }

            switch (cleanedText.length) {
                case 11:
                    return cleanedText.replace(/(\d{1})(\d{3})(\d{3})(\d{4})/, '$1($2)$3-$4');
                case 10:
                    return cleanedText.replace(/(\d{3})(\d{3})(\d{4})/, '($1)$2-$3');
                default:
                    return input;
            }

        };
    }]);

angular.module('nga.filters.yesNo', [])
    .filter('yesNo', [function () {
        return function (input, forceFalse) {

            if (input === false) {
                return 'no';
            }
            if (input === true) {
                return 'yes';
            }


            if(!input && forceFalse) {
                return 'no';
            }

            var trueStrings = ['yes', 'true', '1'];
            var falseStrings = ['no', 'false', '0'];

            if(angular.isString(input)) {
                var lower = input.toLowerCase();

                if(falseStrings.indexOf(lower) > -1) {
                    return 'no';
                }

                if(trueStrings.indexOf(lower) > -1) {
                    return 'yes';
                }
            }

            if(angular.isNumber(input)) {
                if(input === 1) {
                    return 'yes';
                }

                return 'no';
            }

            return input;
        };
    }]);
