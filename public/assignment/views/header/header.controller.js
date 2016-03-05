(function(){
    angular
        .module("FormBuilderApp")
        .controller("HeaderController", HeaderController);


    function HeaderController($scope, $location, $rootScope){
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