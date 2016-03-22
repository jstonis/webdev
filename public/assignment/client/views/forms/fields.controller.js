/**
 * Created by Josceyn on 2/26/2016.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .controller("FieldController", FieldController)

    function FieldController($scope, $routeParams, $rootScope, FieldService){
    	var self = this;

    	var formId = $routeParams.formId;

    	FieldService
    		.getFieldsForForm(formId)
    		.then(function(response){
    			self.fields = response.data;
    		},function(err){
    			self.message = "Error getting fields";
    		})

    	self.addField = function(fieldType){
    		var field = {};
    		switch (fieldType) {
    			case "TEXT" :
    				field = {"_id": null, "label": "New Text Field", "type": "TEXT", "placeholder": "New Field"};
    				break;

    			case "DATE" :
    				field = {
				        "_id": "null",
				        "label" : "Date",
				        "type" : "DATE"
				    };
				    break;

    			case "DROPDOWN" :
    				field = {"_id": null, "label": "New Dropdown", "type": "DROPDOWN", "options": [
						{"label": "Option 1", "value": "OPTION_1"},
						{"label": "Option 2", "value": "OPTION_2"},
						{"label": "Option 3", "value": "OPTION_3"}
					]};
				    break;

    			case "CHECKBOXES" :
    				field = {"_id": null, "label": "New Checkboxes", "type": "CHECKBOXES", "options": [
						{"label": "Option A", "value": "OPTION_A"},
						{"label": "Option B", "value": "OPTION_B"},
						{"label": "Option C", "value": "OPTION_C"}
					]};
				    break;

    			case "OPTIONS" :
    				field = {"_id": null, "label": "New Radio Buttons", "type": "OPTIONS", "options": [
						{"label": "Option X", "value": "OPTION_X"},
						{"label": "Option Y", "value": "OPTION_Y"},
						{"label": "Option Z", "value": "OPTION_Z"}
					]};
				    break;

    			case "TEXTAREA" :
    				field = {"_id": null, "label": "New Text Field", "type": "TEXTAREA", "placeholder": "New Field"};
				    break;
    		}

    		FieldService
    			.createFieldForForm(formId,field)
    			.then(function(response){
    				self.fields = response.data;
    			},function(err){
    				self.message = "Error adding field"
    			});
    	}

    	self.deleteField= function(fieldId){
    		FieldService
    			.deleteFieldFromForm(formId,fieldId)
    			.then(function(response){
    				self.fields = response.data;
    			},function(err){
    				self.message = "Error adding field"
    			})
    	}
    }
})();