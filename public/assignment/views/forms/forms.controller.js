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
            var callback=null;
            FormService.deleteFormById(form._id,callback);
            console.log(form._id);
            var user_id=form.userId;
            console.log("new forms: "+ FormService.findAllFormsForUser(user_id,callback));
            $scope.forms=FormService.findAllFormsForUser(user_id,callback);
        }
        function selectForm(index){
            var callback=null;
            $scope.selectedFormIndex = index;
            FormService.setCurrentForm($scope.forms[index]);


            $scope.newForm = {
                title: $scope.forms[index].title
            };

        }
        function updateForm(form){
            var callback=null;

            if($scope.forms.length>0) {
                form._id = $scope.forms[$scope.selectedFormIndex]._id;
                $scope.forms[$scope.selectedFormIndex].title = FormService.updateFormById($scope.forms[$scope.selectedFormIndex]._id, form, callback).title;
            }
        }
    }
})();