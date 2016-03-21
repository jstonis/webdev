/**
 * Created by Josceyn on 3/19/2016.
 */
module.exports = function(app, formsModel, userModel) {

    app.get("/api/assignment/user/:userId/form", getFormsOfUser);
    app.get("/api/assignment/form/:formId", getFormById);
    app.delete("/api/assignment/form/:formId", deleteFormById);
    app.post("/api/assignment/user/:userId/form", createNewForm);
    app.put("/api/assignment/form/:formId", updateFormById);


    function getFormsOfUser(req, res){
        var formId=req.params.formId;
        var forms=formsModel.findAllFormsForUser(formId);
        res.json(forms);
    }
    function getFormById(req, res){
        var id=req.params.formId;
        var form=formsModel.findFormById(id);
        if(form){
            res.json(form);
            return;
        }
        res.json({message: "Form not found!"});
    }
    function deleteFormById(req, res){
        var id=req.params.id;
        if(formsModel.deleteFormById(id)){
            res.send(200);
            return;;
        }
        res.json({message: "Form not found!"});

    }
    function createNewForm(req, res){
       var form=req.body;
        var userId=req.params.userId;
        formsModel.createFormForUser(userId,form);
        res.send(200);
    }

    function updateFormById(req, res){
        var id=req.params.id;
        var form=req.body;
        form=formsModel.updateFormById(id,form);
        if(form){
            res.json(form);
            return;
        }
        res.json({message:"Form not found!"});


    }


    /*  function getLikes(req, res) {
     var userId = req.param.userId;
     var user = userModel.findUserById(userId);
     var likes = user.likes;
     res.send(likes);
     }

     function login(req, res) {
     var credentials = req.body;
     var user = userModel.findUser(credentials.username, credentials.password);
     res.json(user);
     }

     function like(req, res) {
     var userId = req.params.userId;
     var idIMDB = req.params.idIMDB;
     var user = userModel.userLikesMovie(userId, idIMDB);
     res.json(user);
     }*/
}
