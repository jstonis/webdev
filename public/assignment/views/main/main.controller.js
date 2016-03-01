/**
 * Created by Josceyn on 2/27/2016.
 */

(function(){
    angular
        .module("FormBuilderApp")
        .controller("MainController", MainController);


   function MainController($scope, $location){
       $scope.$location = $location;
    }
})();