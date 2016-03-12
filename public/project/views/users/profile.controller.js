/**
 * Created by Josceyn on 2/26/2016.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .controller("ProfileController", ProfileController)

function ProfileController($scope, $location, $rootScope, UserService, ProductsService){
    $scope.error=null;
    $scope.message=null;
    $scope.user=UserService.getCurrentUser();
    var userReviews=ProductsService.getReviewsByUser($scope.user);
    var followers=UserService.getFollowersByUserId($scope.user._id);
    $scope.userFollowings=getUsersByIds(followers);
    $scope.follow=follow;
    var reviewsWithImage=profileViewReviews();
    $scope.profileViewReviews=profileViewReviews();





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
        if (!user.password) {
            $scope.message = "Please provide a password";
            return;
        }
        if(!user.email){
            $scope.message="Please provide an email";
            return;
        }
        var callback=null;
       $scope.user=UserService.updateUser(UserService.findUserByCredentials(user.username, user.password,callback)._id,user,callback);

        console.log($scope.user);


        if($scope.user){
            $scope.message="User updated successfully";
            UserService.setCurrentUser($scope.user);
        }
        else{
            $scope.message="Unable to update the user";
        }
    }
    function getUsersByIds(userIds){
        var usersNames=[];

        for (var u in userIds) {
                usersNames.push(UserService.getUsersNameById(userIds[u]));
        }
        return usersNames;


    }

    function follow(){

    }
    function profileViewReviews(){
        var userReviewsWithImage=[];

        for(var u in userReviews){
            var reviews={image:ProductsService.getImageByProductId(userReviews[u].productId), review:userReviews[u].review};
            userReviewsWithImage.push(reviews);
        }
        return userReviewsWithImage;

    }


}

})();