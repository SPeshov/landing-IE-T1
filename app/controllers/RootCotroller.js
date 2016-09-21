WPAngularStarter.controller('RootController', function($scope, $state, $stateParams) {
  $scope.isActive = false;
    $scope.activeButton = function() {
      $scope.isActive = !$scope.isActive;

    };
});
