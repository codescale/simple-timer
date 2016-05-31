(function () {

  var module = angular.module('timer.service', []);

  module.factory('sound', function () {

    'use strict';

    var playSound = function (buffer, time) {
      var source = context.createBufferSource();
      source.buffer = buffer;
      source.connect(context.destination);
      if (!source.start) {
        source.start = source.noteOn;
      }
      source.start(time);
    };

    return {
      playFor: function (seconds) {

        // We'll start playing 100 milliseconds from "now"
        var startTime = context.currentTime + 0.100;

        if (seconds === 0) {
          playSound(BUFFERS.minute, startTime);
        } else if (seconds === 15) {
          playSound(BUFFERS.quater, startTime);
        } else if (seconds === 30) {
          playSound(BUFFERS.quater, startTime);
          playSound(BUFFERS.quater, startTime + 1);
        } else if (seconds === 45) {
          playSound(BUFFERS.quater, startTime);
          playSound(BUFFERS.quater, startTime + 1);
          playSound(BUFFERS.quater, startTime + 2);
        }
      }
    };
  });

})();