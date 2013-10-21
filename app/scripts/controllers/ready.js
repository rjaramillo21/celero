app.controller('ReadyCtrl', function ($scope, $translate) {
  $scope.$on('$includeContentLoaded', scriptReady);
});

