/**
 * Created by Josceyn on 2/26/2016.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .controller("HomeController", HomeController)


    function HomeController($scope, ProductsService, $location, $rootScope, UserService){
        $scope.products=ProductsService.findAllProducts();
        console.log($scope.products);

    }


})();
