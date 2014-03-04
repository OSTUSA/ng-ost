//TODO: Add attributes for specifiying Sort Icons or text
angular.module('ngost.directives.tdSort', [])
    .directive('ngostTdSort', [function () {
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