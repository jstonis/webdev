/**
 * Created by Josceyn on 3/11/2016.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .controller("CarKitsController", CarKitsController)


    function CarKitsController($scope, UserService, $location, $rootScope, ProductsService){
        $scope.carKits=ProductsService.getCarKits();
        $scope.addItem=addCart;

        function addCart(accessory){
            UserService.addToCart(accessory);
            $location.url("/cart")
        }



    }


})();