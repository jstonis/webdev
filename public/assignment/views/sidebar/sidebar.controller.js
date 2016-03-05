/**
 * Created by Josceyn on 2/26/2016.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .controller("SidebarController", SidebarController);


    function SidebarController($scope, $location, $rootScope, UserService){
        $scope.$location = $location;
        $scope.isAdmin=isAdmin;
        $scope.isLoggedIn=isLoggedIn;
        $scope.isLoggedOut=isLoggedOut;

        function isAdmin(){
            console.log("sidebar admin check");
            for (var u in $rootScope.currentUser.roles) {
                if ($rootScope.currentUser.roles[u] === "admin") {
                    return true;
                }
            }
            return false;
        }
        function isLoggedIn(){
            console.log("sidebar log in check");
            if($rootScope.currentUser){
                return true;
            }
            else{return false;}
        }
        function isLoggedOut(){
            console.log("sidebar logged out check");
            if($rootScope.currentUser){
                return false;
            }
            else{return true;}
        }


    }
})();