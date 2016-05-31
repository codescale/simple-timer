(function () {

  var module = angular.module('timer.controller', []);

  module.controller('clock', ['$scope', '$interval', 'sound', function clockController($scope, $interval, sound) {
    $interval(function () {
      $scope.time = new Date();
      var seconds = $scope.time.getSeconds();
      sound.playFor(seconds);
    }, 1000);

  }]);

})();