/*
 * ng-ost
 * http://ostusa.github.io/ng-ost

 * Version: 0.1.1 - 2014-03-05
 * License: 
 */
angular.module("ngOst", ["ngOst.directives.busyButton","ngOst.directives.confirmButton","ngOst.directives.tdSearch","ngOst.directives.tdSort","ngOst.filters.blankData","ngOst.filters.humanize","ngOst.filters.paged","ngOst.filters.prettyDate","ngOst.filters.stringFormat","ngOst.filters.truncate","ngOst.filters.usPhoneNumber","ngOst.filters.yesNo"]);
//TODO: Add attributes for specifying busyState string i.e ('loading')
//TODO: Add attributes for specifying initialState string i.e ('reset')

angular.module('ngOst.directives.busyButton', [])
    .constant('busyButtonConfig', {
        initialState: 'reset',
        busyState: 'loading'
    })
    .controller('busyButtonController', ['busyButtonConfig', function (busyButtonConfig) {
        this.busyState = busyButtonConfig.busyState;
        this.initialState = busyButtonConfig.initialState;
    }])
    .directive('ngOstBusyButton', [function () {
        return {
            require: ['ngOstBusyButton'],
            controller: 'busyButtonController',
            link: function (scope, element, attrs, ctrls) {
                var buttonsCtrl = ctrls[0];

                scope.$watch(function () {

                    return scope.$eval(attrs['busyButton']);

                }, function (loading) {

                    if (loading) {
                        element.button(buttonsCtrl.busyState);
                        return;
                    }
                    element.button(buttonsCtrl.initialState);

                });
            }
        };
    }]);
angular.module('ngOst.directives.confirmButton', [])
    .constant('confirmButtonConfig', {
        message: 'Are you sure?'
    })
    .controller('confirmButtonController', ['confirmButtonConfig', function (confirmButtonConfig) {
        this.message = confirmButtonConfig.message || 'Are you sure?';
    }])
    .directive('ngOstConfirmButton', [function () {
        return {
            require: ['ngOstConfirmButton'],
            controller: 'confirmButtonController',
            link: function (scope, element, attrs, ctrls) {
                var buttonsCtrl = ctrls[0];

                element.bind('click', function (event) {
                    var messageOverride = attrs['confirmMessage'];
                    if (confirm(messageOverride || buttonsCtrl.message)) {
                        if (attrs['ngClick']) {
                            scope.$eval(attrs['ngClick']);
                        }
                    }
                    event.stopImmediatePropagation();
                });
            }
        };
    }]);
//TODO: Add attributes for specifying input classes
//TODO: Add attributes for specifying search Icon or Text
angular.module('ngOst.directives.tdSearch', [])
    .directive('ngOstTdSearch', [function () {
        return {
            restrict:'E',
            replace: true,
            require: ['search'],
            template: '<div><input placeholder="search" ng-model="search" ng-show="searching" ng-blur="searchBlur()" class="col-sm-2 table-search-input ng-valid ng-dirty ng-hide"><a ng-click="searchClick()" class="pointer"><i class="glyphicon glyphicon-search"></i></a></div>',
            scope: {
                search: '='
            },
            controller: ['$scope', function($scope) {
                $scope.searchClick = function() {
                    $scope.searching = !$scope.searching;
                    if(!$scope.searching) {
                        $scope.search = '';
                    }
                };
                $scope.searchBlur = function() {
                    if(!$scope.search) {
                        $scope.searching = false;
                    }
                };
            }]
        };
    }]);
//TODO: Add attributes for specifiying Sort Icons or text
angular.module('ngOst.directives.tdSort', [])
    .directive('ngOstTdSort', [function () {
        return {
            restrict: 'E',
            replace: true,
            require: ['sort', 'sortDirection'],
            template: '<a ng-click="setSort()">{{ text }} <i class="glyphicon" ng-class="{\'glyphicon-sort-by-attributes\':!sortDirection, \'glyphicon-sort-by-attributes-alt\':sortDirection}" ng-show="sort==sortTarget"></i></a>',
            scope: {
                sort: '=',
                sortDirection: '=',
                sortTarget: '@',
                text: '@'
            },
            controller: ['$scope', function ($scope) {
                $scope.setSort = function () {
                    if ($scope.sort === $scope.sortTarget) {
                        if ($scope.sortDirection) {
                            $scope.sort = $scope.sortDirection = '';
                            return;
                        }

                        $scope.sortDirection = !$scope.sortDirection;
                        return;
                    }

                    $scope.sort = $scope.sortTarget;
                    $scope.sortDirection = false;
                };
            }]
        };
    }]);
angular.module('ngOst.filters.blankData', [])
    .filter('blankData', [function () {
        return function (input, placeholder) {
            if (input !==0 && !input) {
                return placeholder || '-';
            }

            return input;
        };
    }]);

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
angular.module('ngOst.filters.paged', [])
    .filter('paged', function () {
        return function (input, start, end, notPaged) {
            if ((!angular.isArray(input) || notPaged) || (start > end)) {
                return input;
            }

            return input.slice(start, end);
        };
    });
angular.module('ngOst.filters.prettyDate', [])
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

angular.module('ngOst.filters.stringFormat', [])
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
angular.module('ngOst.filters.truncate', [])
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

angular.module('ngOst.filters.usPhoneNumber', [])
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

angular.module('ngOst.filters.yesNo', [])
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
