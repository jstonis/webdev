/**
 * Created by Josceyn on 2/26/2016.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .controller("SidebarController", SidebarController);


    function SidebarController($scope, $location, $rootScope){
        $scope.isAdmin=isAdmin;
        $scope.isLoggedIn=isLoggedIn;

        function isAdmin(){
            for (var u in $rootScope.currentUser.roles) {
                if (u === "admin") {
                    return true;
                }
            }
            return false;
        }
        function isLoggedIn(){
            if($rootScope.currentUser!=null){
                return true;
            }
            else{return false;}
        }


    }
})();