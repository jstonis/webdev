/**
 * Created by Josceyn on 3/11/2016.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .controller("CarBrandsController", CarBrandsController)


    function CarBrandsController($scope, UserService, $location, $rootScope, ProductsService){

        $scope.carMakes=ProductsService.getCarMakes();


    }


})();