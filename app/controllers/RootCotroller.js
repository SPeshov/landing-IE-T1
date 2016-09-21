WPAngularStarter.controller('RootController', function($scope, $state, $stateParams,  $anchorScroll, $location) {
  $scope.isActive = false;
    $scope.activeButton = function() {
      $scope.isActive = !$scope.isActive;

    };

    $scope.scrollTo = function(id) {
     $location.hash(id);
     $anchorScroll();
  };


});
