/**
 * Created by Josceyn on 3/18/2016.
 */
module.exports = function(app, formsModel, userModel) {

    app.post("/api/assignment/user", createNewUser);
    app.get("/api/assignment/user", getAllUsers);
    app.get("/api/assignment/user/:id", getUserById);
    app.get("/api/assignment/user?username=username", getUserByUsername);
    app.get("/api/assignment/user?username=alice&password=wonderland", getUserByCredentials);
    app.put("/api/assignment/user/:id", updateUserById);
    app.delete("/api/assignment/user/:id", deleteUserById);
    app.post("/api/assignment/login", login);
    app.get("/api/assignment/loggedin", loggedin);
    app.post("/api/assignment/logout", logout);
    app.post("/api/assignment/register", register);
    app.get("/api/assignment/profile/:userId", profile);

    function createNewUser(req, res) {
        var user = req.body;
        userModel.createUser(user);
        res.send(200);
    }

    function getAllUsers(req, res) {
        var users = userModel.findAllUsers();
        res.json(users);
    }

    function getUserById(req, res) {
        var id = req.params.id;
        var user = userModel.findUserById(id);
        if (user) {
            res.json(user);
            return;
        }
        res.json({message: "User not found"});

    }

    function getUserByUsername(req, res) {
        var username = req.params.username;
        var user = userModel.findUserByUsername(username);
        if (user) {
            res.json(user);
            return;
        }
        res.json({message: "Username not found!"});
    }

    function getUserByCredentials(req, res) {
        var username = req.params.username;
        var password = req.params.password;

        var user = userModel.findUserByCredentials(username, password);
        if (user) {
            res.json(user);
            return;
        }
        res.json({message: "User not found!"});
    }

    function updateUserById(req, res) {
        var id = req.params.id;
        var user = req.body;
        user = userModel.updateUser(id, user);
        if (user) {
            res.json(user);
            return;
        }
        res.json({message: "user not found!"});


    }

    function deleteUserById(req, res) {
        var id = req.params.id;
        if (userModel.deleteUserById(id)) {
            res.send(200);
            return;
        }
        res.json({message: "User not found!"});
    }

    function login(req, res) {
        var credentials = req.body;
        var user = userModel.findUserByCredentials(credentials);
        req.session.currentUser = user;
        res.json(user);
    }

    function profile(req, res) {
        var userId = req.params.userId;
        var user = userModel.findUserById(userId);
        var form = formModel.findAllFormsForUser(userId);
        res.json(user);
    }

    function loggedin(req, res) {
        res.json(req.session.currentUser);
    }

    function logout(req, res) {
        req.session.destroy();
        res.send(200);

    }

    function register(req, res) {
        var user = req.body;
        user = userModel.createUser(user);
        req.session.currentUser = user;
        res.json(user);
    }
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
