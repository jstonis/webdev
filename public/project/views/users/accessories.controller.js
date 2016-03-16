/**
 * Created by Josceyn on 3/11/2016.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .controller("AccessoriesController", AccessoriesController)


    function AccessoriesController($scope, UserService, $location, $rootScope,ProductsService, UserService){
        $scope.accessories=ProductsService.getAccessories();
        $scope.addItem=addCart;

        function addCart(accessory){
            UserService.addToCart(accessory);
            $location.url("/cart");
        }



    }


})();
