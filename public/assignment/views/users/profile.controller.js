/**
 * Created by Josceyn on 2/26/2016.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .controller("ProfileController", ProfileController)

function ProfileController($scope, $location, $rootscope, UserService){
$scope.error=null;
    $scope.message=null;
$scope.user=UserService.getCurrentUser();


    if (!$scope.currentUser) {
        $location.url("/home");
    }
    $scope.update=update;

    function update(user){

        $scope.error=null;
        $scope.message=null;

        if (user == null) {
            $scope.message = "Please fill in the required fields";
            return;
        }
        if (!user.username) {
            $scope.message = "Please provide a username";
            return;
        }
        if (!user.password || !user.password2) {
            $scope.message = "Please provide a password";
            return;
        }
        if (user.password != user.password2) {
            $scope.message = "Passwords must match";
            return;
        }

       $scope.user=UserService.updateUser(user);

        if(user){
            $scope.message="User updated successfully";
            UserService.setCurrentUser($scope.user);
        }
        else{
            $scope.message="Unable to update the user";
        }
    }

}

})();