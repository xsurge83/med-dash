angular.module('starter.controllers', [])

  .controller('DashCtrl', function ($scope, $interval) {
    $scope.heartRate = 50;
    $scope.cardiacOuput = 100;
    $scope.strokeVolume = 40;

    $interval(function updateReport() {
      var random = Math.floor(Math.random() * 10);
      if (random > 5) {
        random = -(random);
      }
      $scope.heartRate += random
      $scope.cardiacOuput += random;
      $scope.strokeVolume += random;
      $scope.chart.series[0].data.push($scope.heartRate);
    }, 1000);

    $scope.chart = {
      options: {
        chart: {
          type: 'column'
        }
      },
      series: [{
        data: [10, 15, 12, 8, 7]
      }],
      title: {
        text: 'Heart'
      },
      loading: false
    };
  })

  .controller('FriendsCtrl', function ($scope, Friends) {
    $scope.friends = Friends.all();
  })

  .controller('FriendDetailCtrl', function ($scope, $stateParams, Friends) {
    $scope.friend = Friends.get($stateParams.friendId);
  })

  .controller('AccountCtrl', function ($scope) {
  });
