(function (angular) {
  "use strict";

  /*
   1 . change graph based on selected variable
   2. add logo and background screne.

   */
  angular.module('starter.controllers', ['starter.services', 'ism-c3'])

    .controller('DashCtrl', function ($scope, HeartSimulator, C3) {

      var heartSimulator = new HeartSimulator();
      var heartRateChart = C3.createGauge({
            element: '#heart-rate',
            max: HeartSimulator.LIMIT.HEART_RATE.MAX,
            value: 100}
        ),
        cardiacOutputChart = C3.createGauge({
            element: '#cardiac-output',
            max: HeartSimulator.LIMIT.CARDIAC_OUTPUT.MAX,
            value: 5}
        ),
        strokeVolumeChart = C3.createGauge({
            element: '#stroke-volume',
            max: HeartSimulator.LIMIT.STROKE_VOLUME.MAX,
            value: 100}
        );


      heartSimulator.start(updateHeartInfo);

      $scope.heartRate = 50;
      $scope.cardiacOutput = 100;
      $scope.strokeVolume = 40;


      $scope.selectedTab = 'heart';

      var barColumns = [
        [$scope.selectedTab]
      ];
      var chart = C3.createChart({
        element: '#bar-chart',
        columns: barColumns
      });

      $scope.selected = function (selectedTab) {
        if ($scope.selectedTab != selectedTab) {

          // unload current tab
          chart.unload({
            ids: [$scope.selectedTab]
          });
          $scope.selectedTab = selectedTab;
        }
      }

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

        updateChart(result.cache);
      }

      function updateChart(cache) {
        var collection = cache[$scope.selectedTab];


//        var barColumns = [[$scope.selectedTab].concat(collection)];

        var barColumns = [['heart rate'].concat(cache['heart']),
                          ['stroke volume'].concat(cache['stroke'])];

        chart.load({
          columns: barColumns
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
