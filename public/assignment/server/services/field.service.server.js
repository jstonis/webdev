var formModel = require("../models/form.model.js")();

module.exports = function(app) {

    app.get("/api/assignment/form/:formId/field", getFieldsOfForm);
    app.get("/api/assignment/form/:formId/field/:fieldId", getFieldById);
    app.delete("/api/assignment/form/:formId/field/:fieldId", deleteFieldById);
    app.post("/api/assignment/form/:formId/field", createNewField);
    app.put("/api/assignment/form/:formId/field/:fieldId", updateFieldById);


    function getFieldsOfForm(req, res){
        var formId=req.params.formId;
        var fields=formModel.getAllFieldsByFormId(formId);
        res.json(fields);
    }

    function getFieldById(req, res){
        var formId=req.params.formId;
        var fieldId=req.params.fieldId;
        var field=fieldsModel.getFieldsById(formId, fieldId);
        if(field){
            res.json(field);
            return;
        }
        res.json({message: "Field not found!"});
    }
    function deleteFieldById(req, res){
        var formId=req.params.formId;
        var fieldId=req.params.fieldId;
        var data = formModel.deleteFieldById(formId,fieldId);
        res.json(data);
    }
    function createNewField(req, res){
        var formId=req.params.formId;
        var field=req.body;
        var data = formModel.createFieldByFormId(formId, field);
        res.json(data);
    }

    function updateFieldById(req, res){
        var formId=req.params.formId;
        var fieldId=req.params.fieldId;
        var field=req.body;
        fieldsModel.updateFieldObjectById(formId,fieldId,field);
        res.send(200);
    }
};
