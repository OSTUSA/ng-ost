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