/**
 * Created by Josceyn on 3/3/2016.
 */

(function() {
    angular
        .module("FormBuilderApp")
        .factory("FormService", FormService);

    function FormService($rootScope) {

        var allForms=[];
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
        return allForms;


        function setCurrentForm (form) {
            $rootScope.currentForm = form;
        }

        function getCurrentForm () {
            return $rootScope.form;
        }

        function createFormForUser(userId, form, callback){
            var form = {
                _id: (new Date).getTime(), userId: userId, title: form.title
            };
            allForms.forms.push(form);
            callback=allForms.forms;
            return callback;

        }

        function findAllFormsForUser(userId, callback){
            var formsForUser=[];

            for (var u in allForms.forms) {
                if (allForms.forms[u].userId==userId) {
                    formsForUser.push(allForms.forms[u]);
                }
            }
            callback=formsForUser;
            return callback;
        }

        function deleteFormById(formId, callback){
            for (var u in allForms.forms) {
                if (allForms.forms[u]._id==formId) {
                    allForms.forms.splice(u,1);
                    callback=allForms.forms;
                    return callback;
                }
            }
            return null;
        }
        function getFormByTitle(title, callback){
            for (var u in allForms.forms){
                if(allForms.forms[u].title=title){
                    callback=allForms.forms[u];
                    return callback;
                }
            }
            return null;
        }

        function updateFormById(formId, newForm, callback){
            console.log("update form: ");
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
            return null;

        }


    }
})();
