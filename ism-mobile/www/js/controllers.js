(function (angular) {
  "use strict";

  /*
   1 . change graph based on selected variable
   2. add logo and background screne.

   */
  angular.module('starter.controllers', ['starter.services'])

    .controller('DashCtrl', function ($scope, HeartSimulator) {

      var heartSimulator = new HeartSimulator(),
        heartRateChart = createGauge('#heart-rate'),
        cardiacOutputChart = createGauge('#cardiac-output'),
        strokeVolumeChart = createGauge('#stroke-volume');
      heartSimulator.start(updateHeartInfo);

      $scope.heartRate = 50;
      $scope.cardiacOutput = 100;
      $scope.strokeVolume = 40;

      function updateHeartInfo(result) {
        $scope.heartRate = result.heartRate;
        $scope.cardiacOutput = result.cardiacOutput;
        $scope.strokeVolume = result.strokeVolume;
      }


      function createGauge(element) {
        return c3.generate({
          bindto: element,
          data: {
            columns: [
              ['data', 91.4]
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
//              show: false // to turn off the min/max labels.
            },
//    min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
    max: 100, // 100 is default
            units: '',
            width: 10 // for adjusting arc thickness
          },
          color: {
            pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
            threshold: {
//            unit: 'value', // percentage is default
            max: 200, // 100 is default
              values: [30, 60, 90, 100]
            }
          }
        });
      }

      setTimeout(function () {
        chart.load({
          columns: [
            ['data', 10]
          ]
        });
      }, 1000);

      setTimeout(function () {
        chart.load({
          columns: [
            ['data', 50]
          ]
        });
      }, 2000);

      setTimeout(function () {
        chart.load({
          columns: [
            ['data', 70]
          ]
        });
      }, 3000);

      setTimeout(function () {
        chart.load({
          columns: [
            ['data', 0]
          ]
        });
      }, 4000);

      setTimeout(function () {
        chart.load({
          columns: [
            ['data', 100]
          ]
        });
      }, 5000);

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
