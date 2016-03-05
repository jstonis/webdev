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
                _id: (new Date).getTime(), userId: userId
            };
            allForms.forms.push(form);
            callback=allForms.forms;
            return callback;

        }

        function findAllFormsForUser(userId, callback){
            var formsForUser=[];

            for (var u in allForms.forms) {
                console.log(allForms.forms[u]);
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
                    allForms.forms[u].remove();
                    callback=allForms.form;
                    return callback;
                }
            }
            return null;
        }
        function getFormByTitle(title, callback){
            for (var u in allForms.forms){
                if(allForms.forms[u].title=title){
                    callback=allForms.forms;
                    return callback;
                }
            }
            return null;
        }

        function updateFormById(formId, newForm, callback){
            for (var u in allForms.forms) {
                if (allForms.forms[u]._id === formId) {
                    allForms.forms[u]=newForm;
                    callback=allForms.form[u];
                    return callback;
                }
            }
            return null;

        }


    }
})();
