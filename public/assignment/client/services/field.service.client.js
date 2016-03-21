/**
 * Created by Josceyn on 3/3/2016.
 */

(function() {
    angular
        .module("FormBuilderApp")
        .factory("FieldService", FieldService);

    function FieldService($rootScope) {

        /*  var allForms=[];
         allForms = {
         forms: [
         {"_id": "000", "title": "Contacts", "userId": 123},
         {"_id": "010", "title": "ToDo",     "userId": 123},
         {"_id": "020", "title": "CDs",      "userId": 234},

         ],

         createFormForUser: createFormForUser,
         findAllFormsForUser: findAllFormsForUser,
         deleteFormById: deleteFormById,
         updateFormById: updateFormById,
         setCurrentForm: setCurrentForm,
         getCurrentForm: getCurrentForm,
         getFormByTitle: getFormByTitle
         };
         return allForms;*/

        var api={
            createFieldForForm: createFieldForForm,
            getFieldsForForm: getFieldsForForm,
            getFieldForForm: getFieldForForm,
            deleteFieldFromForm: deleteFieldFromForm,
            updateField: updateField
        };
        return api;


        /*function setCurrentForm (form) {
         $rootScope.currentForm = form;
         }

         function getCurrentForm () {
         return $rootScope.form;
         }*/

        function createFieldForForm(formId, field){
            /*var form = {
             _id: (new Date).getTime(), userId: userId, title: form.title
             };
             allForms.forms.push(form);
             callback=allForms.forms;
             return callback;*/
            $http.post("/api/assignment/form/"+formId+"/field", field);

        }

        function getFieldsForForm(formId){
            /* var formsForUser=[];

             for (var u in allForms.forms) {
             if (allForms.forms[u].userId==userId) {
             formsForUser.push(allForms.forms[u]);
             }
             }
             callback=formsForUser;
             return callback;*/
            return $http.get("/api/assignment/form/"+formId+"/field");
        }

        function getFieldForForm(formId, fieldId){
            /*  for (var u in allForms.forms) {
             if (allForms.forms[u]._id==formId) {
             allForms.forms.splice(u,1);
             callback=allForms.forms;
             console.log(allForms.forms);
             return callback;
             }
             }
             return null;*/
           $http.get("/api/assignment/form/"+formId+"/field/"+fieldId);
        }
        function deleteFieldFromForm(formId, fieldId){
            /*  for (var u in allForms.forms){
             if(allForms.forms[u].title=title){
             callback=allForms.forms[u];
             return callback;
             }
             }
             return null;*/
            $http.delete("/api/assignment/form/"+formId+"/field/"+fieldId);

        }

        function updateField(formId, fieldId, field){
            /*console.log("update form: ");
             for (var u in allForms.forms) {
             console.log("going through forms:"+ allForms.forms[u]._id);
             console.log("selected form id: " + formId);
             if (allForms.forms[u]._id === formId) {
             console.log("update form found!");
             allForms.forms[u]=newForm;
             callback=allForms.forms[u];
             return callback;
             }
             }
             return null;*/

            $http.put("/api/assignment/form/"+formId+"/field/"+fieldId, field);

        }


    }
})();
