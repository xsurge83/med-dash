(function (angular) {
  "use strict";

  /*
   1 . change graph based on selected variable
   2. add logo and background screne.

   */
  angular.module('starter.controllers', ['starter.services', 'ism-c3'])

    .controller('DashCtrl', function ($scope, HeartSimulator, C3) {
      var MAX_NUM_BARS = 20;
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


      var barColumns = [['heart rate']];
      var barChart = C3.createBarChart({
        element: '#bar-chart',
        columns : barColumns
      });


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

        updateBarChart(result.heartRate);
      }

      function updateBarChart(newItem){
        var collection = barColumns[0];

        if(collection.length == MAX_NUM_BARS+1){
          collection.splice(1,1);
        }
        collection.push(newItem);
        barChart.load({
          columns : barColumns
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
