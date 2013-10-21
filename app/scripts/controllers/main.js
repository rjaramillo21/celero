'use strict';

app.controller('MainCtrl', function ($scope, $translate) {
  $scope.changeLanguage = function (key) {
    $translate.uses(key);
  };
});
