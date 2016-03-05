/**
 * Created by Josceyn on 3/3/2016.
 */

(function() {
    angular
        .module("FormBuilderApp")
        .factory("FormService", FormService);

    function FormService($rootScope) {

        var forms=[];
        forms = {
            forms: [
                [
                    {"_id": "000", "title": "Contacts", "userId": 123},
                    {"_id": "010", "title": "ToDo",     "userId": 123},
                    {"_id": "020", "title": "CDs",      "userId": 234},
                ]

            ],

            createFormForUser: createFormForUser,
            findAllFormsForUser: findAllFormsForUser,
            deleteFormById: deleteFormById,
            updateFormById: updateFormById,
            setCurrentForm: setCurrentForm,
            getCurrentForm: getCurrentForm
        };
        return forms;


        function setCurrentForm (form) {
            $rootScope.currentForm = form;
        }

        function getCurrentForm () {
            return $rootScope.form;
        }

        function createFormForUser(userId, form, callback){
            var form = {
                _id: (new Date).getTime(), userId: user.username, password: user.password
            };
            forms.forms.push(form);
            callback=forms;
            return callback;

        }

        function findAllFormsForUser(userId, callback){
            var formsForUser=[];
            for (var u in forms.form) {
                if (forms.form[u].userId==userId) {
                    formsForUser.push(forms.form[u]);
                }
            }
            callback=formsForUser;
            return callback;
        }

        function deleteFormById(formId, callback){
            for (var u in forms.form) {
                if (forms.form[u]._id==formId) {
                    forms.form[u].remove();
                    callback=forms.form;
                    return callback;
                }
            }
            return null;
        }

        function updateFormById(formId, newForm, callback){
            for (var u in forms.form) {
                if (forms.form[u]._id === formId) {
                    forms.form[u]=newForm;
                    callback=forms.form[u];
                    return callback;
                }
            }
            return null;

        }


    }
})();
