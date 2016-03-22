/**
 * Created by Josceyn on 2/26/2016.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .controller("FormController", FormController)

    function FormController($scope, $location, $rootScope, FormService, UserService){
        var self = this;
        $scope.addForm=addForm;
        $scope.removeForm=removeForm;
        $scope.selectForm=selectForm;
        $scope.updateForm=updateForm;
        self.newForm = {};
        var callback=null;

        FormService
        .findAllFormsForUser($rootScope.currentUser._id)
        .then(function(response){
            self.forms = response.data;
        },function(err){
            $scope.message = "Error fetching forms"
        });

        function addForm(form){
            $scope.message = null;

            if (form == null) {
                $scope.message = "Please fill in the required fields";
                return;
            }

            if (!form.title) {
                $scope.message = "Please provide a name";
                return;
            }

            FormService
                .createFormForUser($rootScope.currentUser._id,form)
                .then(function(response){
                    FormService
                        .findAllFormsForUser($rootScope.currentUser._id)
                            .then(function(response){
                                self.forms = response.data;
                            },function(err){
                                self.message="Unable to fetch forms"
                            });
                },function(err){
                    self.message = "Error creating form."
                });

        }

        function removeForm(form){
            FormService
                .deleteFormById(form._id)
                .then(function(response){
                    FormService
                        .findAllFormsForUser($rootScope.currentUser._id)
                            .then(function(response){
                                self.forms = response.data;
                            },function(err){
                                self.message="Unable to fetch forms"
                            });
                },function(err){
                    self.message = "Error deleting form."
                });
        }
        function selectForm(index){

            self.selectedFormIndex = index;
            self.newForm.title = self.forms[index].title;
            self.newForm._id = self.forms[index]._id;
        }

        function updateForm(form){
            
            FormService.updateFormById(form._id,form)
                .then(function(response){
                    FormService
                        .findAllFormsForUser($rootScope.currentUser._id)
                            .then(function(response){
                                self.forms = response.data;
                            },function(err){
                                self.message="Unable to fetch forms"
                            });
                },function(err){
                    self.message ="error updating the form";
                })
        }
    }
})();