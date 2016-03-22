/**
 * Created by Josceyn on 2/26/2016.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .directive("mySortable", function(){
            return {
                restrict: 'EA',
                link: function(s,e,a){
                    console.log("Loading the directive");
                    $(e).sortable();
                }
            }
        })
})();