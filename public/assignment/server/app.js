/**
 * Created by Josceyn on 3/18/2016.
 */
module.exports = function(app) {
    var userModel    = require("./models/user.model.js")();
    var formsModel   = require("./models/form.model.js")();

    var userService  = require("./services/user.service.js") (app, formsModel, userModel);
    var formsService = require("./services/form.service.js")(app, formsModel, userModel);
    var fieldService = require("./services/field.service.server.js")(app, formsModel, userModel);
}