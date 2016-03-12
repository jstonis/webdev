/**
 * Created by Josceyn on 2/27/2016.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .config(function($routeProvider){
            $routeProvider
                .when("/register", {
                    templateUrl: "views/users/register.view.html",
                    controller: "RegisterController"
                })
                .when("/login", {
                    templateUrl: "views/users/login.view.html",
                    controller: "LoginController"
                })
                .when("/profile", {
                    templateUrl: "views/users/profile.view.html",
                    controller: "ProfileController"
                })
                .when("/admin", {
                 templateUrl: "views/admin/admin.view.html"
              //   controller: "AdminController"
                 })
                 .when("/home", {
                 templateUrl: "views/home/home.view.html",
                   controller: "HomeController"
                 })
                 .when("/forms", {
                 templateUrl: "views/forms/forms.view.html",
                   controller: "FormController"
                 })
                .when("/accessories", {
                    templateUrl: "views/users/accessories.html",
                    controller: "AccessoriesController"
                })
                .when("/carbrands", {
                    templateUrl: "views/users/carbrands.html",
                    controller: "CarBrandsController"
                })
                .when("/carkits", {
                    templateUrl: "views/users/carkits.html",
                    controller: "CarKitsController"
                })
                .when("/carts", {
                    templateUrl: "views/users/cart.html",
                    controller: "CartController"
                })
                .when("/exteriorcleaning", {
                    templateUrl: "views/users/exteriorcleaning.html",
                    controller: "ExteriorCleaningController"
                })
                .when("/finishorder", {
                    templateUrl: "views/users/finishorder.html",
                    controller: "FinishOrderController"
                })
                .when("/interiorcleaning", {
                    templateUrl: "views/users/interiorcleaning.html",
                    controller: "InteriorCleaningController"
                })
                .when("/orderconfirmation", {
                    templateUrl: "views/users/orderconfirmation.html",
                    controller: "OrderConfirmationController"
                })
                .when("/productdisplay", {
                    templateUrl: "views/users/productdisplay.html",
                    controller: "ProductDisplayController"
                })
                .otherwise({
                    redirectTo: "/home"
                });
        })
})();