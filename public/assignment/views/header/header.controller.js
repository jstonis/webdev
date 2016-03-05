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
            console.log("header admin check");
            for (var u in $rootScope.currentUser.roles) {
                if ($rootScope.currentUser.roles[u] === "admin") {
                    return true;
                }
            }
            return false;
        }
        function isLoggedOut(){
            console.log("header log out check");
            console.log($rootScope.currentUser);
            if($rootScope.currentUser){
                console.log("FINALLY LOGGED OUT");
                return false;
            }
            else{
                return true;}
        }
        function isLoggedIn(){
            console.log("header log in check");

            if($rootScope.currentUser){
                return true;
            }
            else{
                return false;}
        }
        function logout(){
            console.log("logged out!!");
            UserService.setCurrentUser(null);
            $location.url("/home");
        }



    }
})();