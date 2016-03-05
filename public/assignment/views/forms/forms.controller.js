/**
 * Created by Josceyn on 2/26/2016.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .controller("FormController", FormController)

    function FormController($scope, $location, $rootScope, FormService){
        $scope.addForm=addForm;
        $scope.removeForm=removeForm;
        $scope.selectForm=selectForm;
        $scope.updateForm=updateForm;
        $scope.forms=FormService.findAllFormsForUser($rootScope.currentUser._id,callback);


        function addForm(form){
            $scope.message = null;
            if (form == null) {
                $scope.message = "Please fill in the required fields";
                return;
            }
            $scope.message = null;
            if (form == null) {
                $scope.message = "Please fill in the required fields";
                return;
            }
            if (!form.name) {
                $scope.message = "Please provide a name";
                return;
            }

            $scope.forms=FormService.createFormForUser($rootScope.currentUser.userId,form,callback).forms;

        }
        function removeForm(form){
            $scope.forms=FormService.removeForm(form);
        }
        function selectForm($index){

        }
        function updateForm(form){
            $scope.forms=FormService.updateForm(form);
        }
    }
})();