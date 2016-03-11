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
                {        "_id":123, "image":"images/bmw wax.jpg",            "productName":"BMW Express Wax"},
                {        "_id":123, "image":"images/toyota washer fluid.jpg",            "productName":"Toyota Windshield Washer Fluid"},
                {        "_id":123, "image":"images/bmw wax.jpg",            "productName":"BMW Express Wax"},
                {        "_id":123, "image":"images/bmw wax.jpg",            "productName":"BMW Express Wax"},
                {        "_id":123, "image":"images/bmw wax.jpg",            "productName":"BMW Express Wax"}
            ],
            getCurrentProduct: getCurrentProduct,
            findAllProducts: findAllProducts,
            setCurrentProduct: setCurrentProduct,
            createProduct: createProduct,
            findProductByName: findProductByName,
            updateProduct: updateProduct,
            deleteProductById: deleteProductById
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
                    currentProducts.prodcuts.splice(u,1);
                    callback=currentProducts.products;
                    return callback;
                }
            }
            return null;
        }
    }
})();