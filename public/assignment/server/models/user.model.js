var mock = require("./user.mock.json");
module.exports = function() {
    var api = {
        createUser: createUser,
        findUserByUsername: findUserByUsername,
        findUserByCredentials: findUserByCredentials,
        findAllUsers: findAllUsers,
        deleteUserById: deleteUserById,
        updateUser: updateUser,
        findUserById: findUserById

    };
    return api;


    function createUser (user, callback) {
        var user = {
            _id: (new Date).getTime(), username: user.username, password: user.password
        };
        mock.push(user);
        //currentUsers.users.push(user);
        callback=user;
        return callback;
    }

    function findUserByUsername (username) {
      /*  for (var u in currentUsers.users) {
            if (currentUsers.users[u].username === username) {
                return currentUsers.users[u];
            }
        }*/
        for (var u in mock) {
            if (mock[u].username === username) {
                return mock[u];
            }
        }
        return null;
    }

    function findUserByCredentials(username, password, callback) {
       /* for (var u in currentUsers.users) {
            //  console.log(currentUsers.users[u].username);
            if (currentUsers.users[u].username === username &&
                currentUsers.users[u].password === password) {
                callback=currentUsers.users[u];
                return callback;
            }
        }*/


        for (var u in mock) {
            //  console.log(currentUsers.users[u].username);
            if (mock[u].username === username &&
                mock[u].password === password) {
                callback=mock[u];
                return callback;
            }
        }
        return null;
    }

    function updateUser (userId, user, callback) {
        for (var u in mock) {
            if (mock[u]._id === userId) {
                mock[u]=user;
                callback=mock[u];
                return callback;
            }
        }
        return null;

    }

    function findAllUsers(callback){
        callback=mock;
        return callback;

    }
    function deleteUserById(userId, callback){
        for (var u in mock) {
            if (mock._id === userId) {
                mock[u].remove();
                callback=mock;
                return callback;
            }
        }
        return null;
    }
    function findUserById(id){
        for(var u in mock){
            if(mock[u]._id==id){}
            return mock[u];
        }
        return null;

    }

}