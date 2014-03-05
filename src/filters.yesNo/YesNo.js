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
