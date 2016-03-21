/**
 * Created by Josceyn on 3/11/2016.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .controller("InteriorCleaningController", InteriorCleaningController)


    function InteriorCleaningController($scope, UserService, $location, $rootScope, ProductsService){
        $scope.interiorProducts=ProductsService.getInteriorProducts();
        $scope.addItem=addCart;

        function addCart(accessory){
            UserService.addToCart(accessory);
        }


    }


})();