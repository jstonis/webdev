
module.exports = function(app) {
    var fieldsModel = require("./../model/form.model.js")();

    app.get("/api/assignment/form/:formId/field", getFieldsOfForm);
    app.get("/api/assignment/form/:formId/field/:fieldId", getFieldById);
    app.delete("/api/assignment/form/:formId/field/:fieldId", deleteFieldById);
    app.post("/api/assignment/form/:formId/field", createNewField);
    app.put("/api/assignment/form/:formId/field/:fieldId", updateFieldById);


    function getFieldsOfForm(req, res){
        var formId=req.params.formId;
        var fields=fieldsModel.getAllFieldsByFormId(formId);
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
        if(fieldsModel.deleteFieldById(formId,fieldId)){
            res.send(200);
            return;;
        }
        res.json({message: "Field not found!"});

    }
    function createNewField(req, res){
        var formId=req.params.formId;
        var field=req.body;
        fieldsModel.createFieldByFormId(formId, field);
        res.send(200);
    }

    function updateFieldById(req, res){
        var formId=req.params.formId;
        var fieldId=req.params.fieldId;
        var field=req.body;
        fieldsModel.updateFieldObjectById(formId,fieldId,field);
        res.send(200);
    }
};
