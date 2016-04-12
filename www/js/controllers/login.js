'use strict';

app.controller('LoginCtrl', function($scope, $state, $ionicPopup, Auth){
  $scope.emailLogin = function() {
    console.log('button was clicked on login');

    // Triggered on a button click, or some other target
      $scope.user = {};

      // An elaborate, custom popup
      var myPopup = $ionicPopup.show({
        templateUrl: 'templates/partials/login.html',
        title: 'Sign In',
        scope: $scope,
        buttons: [
          { text: '<b>Login</b>',
            type: 'button-energized',
            onTap: function(user) {
              user = $scope.user;
              console.log('the user is , ', user);
              // login user and send to dashboard
              Auth.login(user).then(function(){
                $state.go('tab.dash');
              }, function(err) {
                console.log('Error...', err);
              });
            }
          },
          {
            text: '<b>Register</b>',
            type: 'button-positive',
            onTap: function(user) {
              user = $scope.user;
              console.log('the user is , ', user);
              Auth.register(user).then(function(){
                console.log('user was registered successfully');
                $state.go('tab.dash');
              }, function(err){
                console.log('Error...', err);
              });
              // $state.go('tab.dash');
              // login user and send to dashboard
            }
          }
        ]
      });
     };
});