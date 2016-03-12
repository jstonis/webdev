/**
 * Created by Josceyn on 2/26/2016.
 */

(function(){
   angular
       .module("FormBuilderApp")
       .controller("LoginController", LoginController)


    function LoginController($scope, UserService, $location, $rootScope){
            $scope.login=login;
            $scope.message=null;

        function login(user){

            var callback=null;
            var user=UserService.findUserByCredentials(user.username,user.password,callback);

            if(user){
                $rootScope.currentUser=user;
                UserService.setCurrentUser(user);
                $location.url("/profile");
            }
            else{
                $scope.message = "Incorrect user details. Try again!";
            }
        }
    }


})();
