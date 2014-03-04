angular.module('ngost.directives.confirmButton', [])
    .constant('confirmButtonConfig', {
        message: 'Are you sure?'
    })
    .controller('confirmButtonController', ['confirmButtonConfig', function (confirmButtonConfig) {
        this.message = confirmButtonConfig.message || 'Are you sure?';
    }])
    .directive('ngostConfirmButton', [function () {
        return {
            require: ['ngostConfirmButton'],
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