angular.module('ngaDemoApp', ['nga', 'ui.bootstrap','plunker', 'ngTouch', 'ngRoute']);

function MainCtrl($scope, $modal) {
  $scope.showDownloadModal = function() {
    var modalInstance = $modal.open({
      templateUrl: 'downloadModal.html',
      controller: 'DownloadCtrl'
    });
  };
}

var DownloadCtrl = function($scope, $modalInstance) {
  $scope.options = {
    minified: true
  };

  $scope.download = function (version) {
    var options = $scope.options;

    var downloadUrl = ['angular-ally-'];

    downloadUrl.push(version);
    if (options.minified) {
      downloadUrl.push('.min');
    }
    downloadUrl.push('.js');

    return downloadUrl.join('');
  };

  $scope.cancel = function () {
    $modalInstance.dismiss();
  };
};
