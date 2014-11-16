(function (angular) {
  "use strict";

  angular.module('starter.services', [])

  /**
   * A simple example service that returns some data.
   */
    .factory('Friends', FriendsFactory)
    .factory('HeartSimulator', HeartSimulatorFactory)

  HeartSimulatorFactory.$inject = ['$interval'];

  function HeartSimulatorFactory($interval) {

    var LIMIT = {
      HEART_RATE: {
        MIN: 0,
        MAX: 240
      },
      CARDIAC_OUTPUT: {
        MIN: 0,
        MAX: 50
      },
      STROKE_VOLUME: {
        MIN: 0,
        MAX: 300
      }
    }, NEXT_INTERVAL= 1000;

    HeartSimulator.LIMIT = LIMIT;

    function HeartSimulator() {

      var index = 0,
        heartRate = 0,
        cardiacOutput = 0,
        strokeVolume = 0, interval;
      var cache  = {
        heart : [],
        cardiac : [],
        stroke : []
        }, CACHE_LIMIT = 20;

      next();

      return {
        next: next,
        start: start,
        cache : cache
      };

      function start(tickCallback) {
        interval = $interval(function () {
          next();
          if(tickCallback){
            tickCallback({
              heartRate: heartRate,
              cardiacOutput: cardiacOutput,
              strokeVolume: strokeVolume,
              cache : cache
            });
          }
        }, NEXT_INTERVAL);
      }

      function next() {
        heartRate = _generateHeartRate();
        strokeVolume = _generateStrokeValue();
        cardiacOutput = _generateCardiacOutput(heartRate, strokeVolume);
        updateCacheCollection(cache.heart, heartRate);
        updateCacheCollection(cache.stroke, strokeVolume);
        updateCacheCollection(cache.cardiac, cardiacOutput);
        index++;
      }

      function updateCacheCollection(collection, newValue){
        if(collection.length == CACHE_LIMIT){
          collection.splice(0,1);
        }
        collection.push(newValue)
      }

      function _generateHeartRate() {
        return Math.round( getRandomInt(76, 78) + 2
          * Math.sin(_toRadians(index * 30) - 90));
      }

      function _generateStrokeValue() {
        return Math.round(getRandomInt(70, 72) + 2
          * Math.sin(_toRadians(index * 30)));
      }

      function _generateCardiacOutput(heartRate, strokeVolume) {
        var co = heartRate * strokeVolume / 1000;

        return Math.round(co * 10) / 10;
      }

      function _toRadians(degree) {
        return  degree * (Math.PI / 180);
      }

      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
    }

    return HeartSimulator;
  }

  function FriendsFactory() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var friends = [
      { id: 0, name: 'Scruff McGruff' },
      { id: 1, name: 'G.I. Joe' },
      { id: 2, name: 'Miss Frizzle' },
      { id: 3, name: 'Ash Ketchum' }
    ];

    return {
      all: function () {
        return friends;
      },
      get: function (friendId) {
        // Simple index lookup
        return friends[friendId];
      }
    }
  };
})(angular);
