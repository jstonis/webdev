/**
 * Created by Josceyn on 2/26/2016.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .controller("FormController", FormController)

    function FormController($scope, $location, $rootScope, FormService, UserService){
        $scope.addForm=addForm;
        $scope.removeForm=removeForm;
        $scope.selectForm=selectForm;
        $scope.updateForm=updateForm;
        var callback=null;

        $scope.forms=FormService.findAllFormsForUser(UserService.getCurrentUser()._id,callback);

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
            if (!form.title) {
                $scope.message = "Please provide a name";
                return;
            }

            var callback=null;
            FormService.createFormForUser(UserService.getCurrentUser()._id,form,callback);
            callback=null;
            $scope.forms=FormService.findAllFormsForUser(UserService.getCurrentUser()._id,callback);

        }
        function removeForm(form){
            $scope.forms=FormService.removeForm(form);
        }
        function selectForm($index){

        FormService.setCurrentForm($scope.forms[$index]);

        }
        function updateForm(form){
            /*console.log("udpate form!!!!");
            $scope.forms=FormService.findAllFormsForUser(UserService.getCurrentUser()._id,callback);
            console.log($scope.forms);

            var callback=null;

            $scope.forms=FormService.updateFormById(form._id,form,callback);*/

            var callback=null;
            $scope.form[$scope.selectedFormIndex].title = form.title;
            var formId=FormService.forms.form[$scope.selectedFormIndex]._id;


            FormService.updateFormById(formId,form,callback);



        }
    }
})();