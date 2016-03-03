/**
 * Created by Josceyn on 2/26/2016.
 */

(function(){
   angular
       .module("FormBuilderApp")
       .controller("LoginController", LoginController)


    function LoginController($scope, UserService, $location, $rootScope){
            $scope.login=login;

        function login(user){


        }
    }


});
