angular.module('ngost.filters.stringFormat', [])
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