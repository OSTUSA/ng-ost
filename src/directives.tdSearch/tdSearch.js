//TODO: Add attributes for specifying input classes
//TODO: Add attributes for specifying search Icon or Text
angular.module('ngost.directives.tdSearch', [])
    .directive('ngostTdSearch', [function () {
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