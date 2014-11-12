(function (angular) {
  "use strict";

  /*
   1 . change graph based on selected variable
   2. add logo and background screne.

   */
  angular.module('starter.controllers', ['starter.services'])

    .controller('DashCtrl', function ($scope, HeartSimulator) {

      var heartSimulator = new HeartSimulator(),
        heartRateChart = createGauge({
          element : '#heart-rate',
          max: HeartSimulator.LIMIT.HEART_RATE.MAX,
          value : 100}
        ),
        cardiacOutputChart =  createGauge({
            element : '#cardiac-output',
            max: HeartSimulator.LIMIT.CARDIAC_OUTPUT.MAX,
            value : 5}
        ),
        strokeVolumeChart = createGauge({
            element : '#stroke-volume',
            max: HeartSimulator.LIMIT.STROKE_VOLUME.MAX,
            value : 100}
        );
      heartSimulator.start(updateHeartInfo);

      $scope.heartRate = 50;
      $scope.cardiacOutput = 100;
      $scope.strokeVolume = 40;

      function updateHeartInfo(result) {
        heartRateChart.load({
          columns: [
            ['data', result.heartRate]
          ]
        });
        cardiacOutputChart.load({
          columns: [
            ['data', result.cardiacOutput]
          ]
        });
        strokeVolumeChart.load({
          columns: [
            ['data', result.strokeVolume]
          ]
        });
      }
      /**
       *
       * @param {string} options.element
       * @param {string|int} options.value
       * @param {int} options.max
       * @param {int} [options.min]
       * @returns {*}
       */
      function createGauge(options) {

        options.min = options.min | 0;

        return c3.generate({
          bindto: options.element,
          data: {
            columns: [
              ['data', options.value]
            ],
            type: 'gauge',
            onclick: function (d, i) {
              console.log("onclick", d, i);
            },
            onmouseover: function (d, i) {
              console.log("onmouseover", d, i);
            },
            onmouseout: function (d, i) {
              console.log("onmouseout", d, i);
            }
          },
          gauge: {
            label: {
              format: function (value, ratio) {
                return value;
              }
            },
            min: options.min,
            max: options.max,
            units: '',
            width: 5 // for adjusting arc thickness
          },
          color: {
            pattern: ['#60B044']
          }
        });
      }
    })

    .controller('FriendsCtrl', function ($scope, Friends) {
      $scope.friends = Friends.all();
    })

    .controller('FriendDetailCtrl', function ($scope, $stateParams, Friends) {
      $scope.friend = Friends.get($stateParams.friendId);
    })

    .controller('AccountCtrl', function ($scope) {
    });
})
(angular);
