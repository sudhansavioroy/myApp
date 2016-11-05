var starter=angular.module('starter.controllers', []);

starter.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
    $scope.data = {};

    $scope.login = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            $state.go('tab.dash');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
    }
})


.controller('registerController', function($scope,$state) {
    $scope.data = {};

    $scope.register = function() {
            $state.go('login');
          }
        })


.controller('cropsController',function($scope,$state)
{
  $scope.data={};

  $scope.crops=function() {
    $state.go('');
  }
})

.controller('SowingCtrl', function SowingCtrl($scope, cropsData, $stateParams) {

  $scope.crops= cropsData.crops;
  console.log("hello1")
  console.log($stateParams.cropname);
  console.log("hello2")
  // $http.get('data/data.json').success(function(crops){
    // $scope.cropsData=crops.sowings;
    // $scope.sowings=[];
    // $scope.protocols=[];
    // $scope.practices=[];

  //   angular.forEach(crops.sowings, function(demoCrops, index) {
  //     angular.forEach(demoCrops.sowings, function(sowingsGroup, index){
  //       $scope.sowings.push(sowingsGroup);
  //
  //       angular.forEach(sowingsGroup.protocols, function(protocolsGroup, index){
  //         $scope.protocols.push(protocolsGroup);
  //
  //         angular.forEach(protocolsGroup.practices, function(practicesGroup, index){
  //           $scope.practices.push(practicesGroup);
  //         });
  //       });
  //     });
  //   });
  // });

// $scope.setGroups=function(groups){
//   $scope.useGroups=groups;
// }
})



.controller('DashCtrl', function($scope) {})


.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {

    enableFriends: true
  };
});
