/**
 * Created by Josceyn on 2/26/2016.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .controller("AdminController", AdminController)

    function AdminController($scope, $location, $rootScope, UserService, ProductsService){
        $scope.addProduct=addProduct;
        $scope.removeProduct=removeProduct;
        $scope.selectProduct=selectProduct;
        $scope.updateProduct=updateProduct;
        var callback=null;

        $scope.products=ProductsService.findAllProducts();
        console.log($scope.products);

        function addProduct(product){
            $scope.message = null;

            if (product == null) {
                $scope.message = "Please fill in the required fields";
                return;
            }
            $scope.message = null;
            if (product == null) {
                $scope.message = "Please fill in the required fields";
                return;
            }
            if (!product.productName) {
                $scope.message = "Please provide a name";
                return;
            }

            var callback=null;
            ProductsService.createProduct(product,callback);
            callback=null;
            $scope.products=ProductsService.findAllProducts();
        }
        function removeProduct(product){
            var callback=null;
            ProductsService.deleteProductById(product._id,callback);
            $scope.products=ProductsService.findAllProducts();

        }
        function selectProduct(index){
            var callback=null;
            $scope.selectedFormIndex = index;
            ProductsService.setCurrentProduct($scope.products[index]);

            $scope.newProduct={productName:$scope.products[index].productName, description: $scope.products[index].description,
            accessory: $scope.products[index].accessory, price: $scope.products[index].price, kit: $scope.products[index].kit, carMakes:
            $scope.products[index].carMakes};

        }
        function updateProduct(product){
            var callback=null;

            if($scope.products.length>0) {
                product._id=$scope.products[$scope.selectedFormIndex]._id;
                $scope.products[$scope.selectedFormIndex].productName=UserService.updateProduct($scope.products[$scope.selectedFormIndex]._id,product,callback).productName;
                $scope.products[$scope.selectedFormIndex].description=UserService.updateProduct($scope.products[$scope.selectedFormIndex]._id,product,callback).description;
                $scope.products[$scope.selectedFormIndex].accessory=UserService.updateProduct($scope.products[$scope.selectedFormIndex]._id,product,callback).accessory;
                $scope.products[$scope.selectedFormIndex].price=UserService.updateProduct($scope.products[$scope.selectedFormIndex]._id,product,callback).price;
                $scope.products[$scope.selectedFormIndex].kit=UserService.updateProduct($scope.products[$scope.selectedFormIndex]._id,product,callback).kit;

            }
        }
    }
})();