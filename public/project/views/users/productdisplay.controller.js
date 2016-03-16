/**
 * Created by Josceyn on 3/11/2016.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .controller("ProductDisplayController", ProductDisplayController)


    function ProductDisplayController($scope, UserService, $location, $rootScope, $routeParams, ProductsService){
        $scope.id=$routeParams.id;
        $scope.product=ProductsService.getProductById($routeParams.id);
        var selectedProduct=$scope.product;
        $scope.addToCart=addToCart;
        $scope.likeProduct=likeProduct;
        var reviews=ProductsService.getReviewsByProduct($scope.product);
        var allReviews=[];
        for (var u in reviews){
            var review={userId: reviews[u].userId, productId: reviews[u].productId, review: reviews[u].review, name: UserService.getUsersNameById(reviews[u].userId)};
            allReviews.push(review);
        }
        $scope.reviews=allReviews;



        function addToCart(selectedProduct){
            UserService.addToCart(selectedProduct)
            $location.url("/cart");
        }
        function likeProduct(){
                UserService.addLikedProduct(selectedProduct);
        }




    }


})();