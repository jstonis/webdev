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
                        "description": "exterior", "accessory":true, "kit": false, "numOfLikes": 0, "reviews": [], "price":40
                },
                {        "_id":124, "image":"images/toyota washer fluid.jpg", "productName":"Toyota Windshield Washer Fluid",
                        "carMakes": ["Toyota"], "description": "exterior", "accessory": true, "kit": true, "numOfLikes": 0, "reviews": [], "price": 20
                }
            ],
            reviews: [{"productId": 123, "userId": 123, "review": "Good Product"}]
            ,
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
            getCarKits: getCarKits,
            getNumberOfLikes: getNumberOfLikes,
            getReviewsByProduct: getReviewsByProduct,
            getReviewsByUser: getReviewsByUser,
            getReviews: getReviews,
            getImageByProductId: getImageByProductId
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
                for (var j in currentProducts.products[u].carMakes) {
                    console.log(currentProducts.products[u].carMakes[j]);
                    if (carMakes.indexOf(currentProducts.products[u].carMakes[j])==-1) {
                        console.log("here!");
                        carMakes.push(currentProducts.products[u].carMakes[j])
                    }
                }
            }

            return carMakes;

        }


        function getExteriorProducts(){
            var exteriorProducts=[];

            for (var u in currentProducts.products) {
                if(currentProducts.products[u].description="exterior"){
                    exteriorProducts.push(currentProducts.products[u]);
                }
            }
            return exteriorProducts;


        }

        function getInteriorProducts(){
            var interiorProducts=[];

            for (var u in currentProducts.products) {
                if(currentProducts.products[u].description="interior"){
                    interiorProducts.push(currentProducts.products[u]);
                }
            }
            return interiorProducts;
        }

        function getAccessories(){
            var accessories=[];

            for (var u in currentProducts.products) {
                if(currentProducts.products[u].accessory){
                    accessories.push(currentProducts.products[u]);
                }
            }
            return accessories;
        }
        function getCarKits(){
            var carKits=[];

            for (var u in currentProducts.products) {
                if(currentProducts.products[u].kit){
                    carKits.push(currentProducts.products[u]);
                }
            }
            return carKits;
        }

        function getNumberOfLikes(product){
            for (var u in currentProducts.products) {
                if(currentProducts.products[u]._id=product._id){
                   return currentProducts.products[u].numOfLikes;
                }
            }
            return null;
        }

        function getReviewsByProduct(product){
            var productReviews=[];

            for (var u in currentProducts.reviews) {
                if(currentProducts.reviews[u].productId=product._id){
                     productReviews.push(currentProducts.reviews[u]);
                }
            }
            return productReviews;

        }

        function getReviewsByUser(user){
            var productReviews=[];

            for (var u in currentProducts.reviews) {
                if(currentProducts.reviews[u].userId=user._id){
                    productReviews.push(currentProducts.reviews[u]);
                }
            }
            return productReviews;

        }
        function getReviews() {
            return currentProducts.reviews;
        }

    function getImageByProductId(productId){
        for (var u in currentProducts.products) {
            if(currentProducts.products[u]._id=productId){
               return currentProducts.products[u].image;
            }
        }

    }
    }
})();