(function(){
    angular
        .module("FormBuilderApp")
        .controller("HeaderController", HeaderController);


    function HeaderController($scope, $location, $rootScope, UserService){
        $scope.$location = $location;
       $scope.isAdmin=isAdmin;
        $scope.isLoggedIn=isLoggedIn;
        $scope.logout=logout;
        $scope.isLoggedOut=isLoggedOut;

        function isAdmin(){
            for (var u in $rootScope.currentUser.roles) {
                if ($rootScope.currentUser.roles[u] === "admin") {
                    return true;
                }
            }
            return false;
        }
        function isLoggedOut(){
            if($rootScope.currentUser){
                return false;
            }
            else{
                return true;}
        }
        function isLoggedIn(){
            if($rootScope.currentUser){
                return true;
            }
            else{
                return false;}
        }
        function logout(){
            UserService.setCurrentUser(null);
            UserService.logout();
            $location.url("/home");
        }



    }
})();