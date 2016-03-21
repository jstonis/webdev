/**
 * Created by Josceyn on 3/11/2016.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .controller("ExteriorCleaningController", ExteriorCleaningController)


    function ExteriorCleaningController($scope, UserService, $location, $rootScope, ProductsService){
        $scope.exteriorProducts=ProductsService.getExteriorProducts();
        $scope.addItem=addCart;

        function addCart(accessory){
            UserService.addToCart(accessory);
            $location.url("/cart");
        }


    }


})();