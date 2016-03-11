/**
 * Created by Josceyn on 3/11/2016.
 */
(function() {
    angular
        .module("FormBuilderApp")
        .factory("ProductsService", ProductsService);

    function ProductsService($rootScope) {
        var currentProducts=[];
        currentProducts = {
            products: [
                {        "_id":123, "image":"images/bmw wax.jpg",            "productName":"BMW Express Wax", "carMakes":["BMW"],
                        "description": "exterior", "accessory":false, "kit": false
                },
                {        "_id":123, "image":"images/toyota washer fluid.jpg", "productName":"Toyota Windshield Washer Fluid",
                        "carMakes": ["Toyota"], "description": "exterior", "accessory": false, "kit": false
                }
            ],
            getCurrentProduct: getCurrentProduct,
            findAllProducts: findAllProducts,
            setCurrentProduct: setCurrentProduct,
            createProduct: createProduct,
            findProductByName: findProductByName,
            updateProduct: updateProduct,
            deleteProductById: deleteProductById,
            getCarMakes: getCarMakes,
            getExteriorProducts: getExteriorProducts,
            getInteriorProducts: getInteriorProducts,
            getAccessories: getAccessories,
            getCarKits: getCarKits
        };
        return currentProducts;

        function findAllProducts(){
         return currentProducts.products;
        }
        function setCurrentProduct (product) {
            $rootScope.currentProduct = product;
        }

        function getCurrentProduct () {
            return $rootScope.currentProduct;
        }

        function createProduct (product, callback) {
            var product = {
                _id: (new Date).getTime(), image: product.image, productName: product.productName
            };
            currentProducts.products.push(product);
            callback=product;
            return callback;
        }

        function findProductByName (name) {
            for (var u in currentProducts.products) {
                if (currentProducts.products[u].productName === name) {
                    return currentProducts.products[u];
                }
            }
            return null;
        }

        function updateProduct (productId, product, callback) {
            for (var u in currentProducts.products) {
                if (currentProducts.products[u]._id ===productId) {
                    currentProducts.products[u]=product;
                    callback=currentProducts.products[u];
                    return callback;
                }
            }
            return null;

        }

        function deleteProductById(productId, callback){
            for (var u in currentProducts.products) {
                if (currentProducts.products[u]._id === productId) {
                    currentProducts.products.splice(u,1);
                    callback=currentProducts.products;
                    return callback;
                }
            }
            return null;
        }

        function getCarMakes() {
            var carMakes = [];

            for (var u in currentProducts.products) {
                for (var j in currentProducts.products.carMakes[j]) {
                    if (!carMakes.contains(currentProducts.products[u].carMakes[j])) {
                        carMakes.add(currentProducts.products[u].carMakes[j])
                    }
                }
            }
            return carMakes;

        }


        function getExteriorProducts(){
            var exteriorProducts=[];

            for (var u in currentProducts.products) {
                if(currentProducts.products[u].description="exterior"){
                    exteriorProducts.add(currentProducts.products[u]);
                }
            }
            return exteriorProducts;


        }




    }
})();