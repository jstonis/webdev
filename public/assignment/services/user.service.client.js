/**
 * Created by Joscelyn on 2/27/2016.
 */

(function() {
    angular
        .module("FormBuilderApp")
        .factory("UserService", UserService);

    function UserService($rootScope) {
        var currentUsers=[];
        currentUsers = {
            users: [
                {        "_id":123, "firstName":"Alice",            "lastName":"Wonderland",
                    "username":"alice",  "password":"alice",   "roles": ["student"]                },
                {        "_id":234, "firstName":"Bob",              "lastName":"Hope",
                    "username":"bob",    "password":"bob",     "roles": ["admin"]                },
                {        "_id":345, "firstName":"Charlie",          "lastName":"Brown",
                    "username":"charlie","password":"charlie", "roles": ["faculty"]                },
                {        "_id":456, "firstName":"Dan",              "lastName":"Craig",
                    "username":"dan",    "password":"dan",     "roles": ["faculty", "admin"]},
                {        "_id":567, "firstName":"Edward",           "lastName":"Norton",
                    "username":"ed",     "password":"ed",      "roles": ["student"]                }
            ],
            createUser: createUser,
            findUserByUsername: findUserByUsername,
            findUserByCredentials: findUserByCredentials,
            findAllUsers: findAllUsers,
            deleteUserById: deleteUserById,
            updateUser: updateUser,
            setCurrentUser: setCurrentUser,
            getCurrentUser: getCurrentUser
        };
        return currentUsers;

        function setCurrentUser (user) {
            $rootScope.currentUser = user;
        }

        function getCurrentUser () {
            return $rootScope.currentUser;
        }

        function createUser (user, callback) {
            var user = {
                _id: (new Date).getTime(), username: user.username, password: user.password
            };
            currentUsers.users.push(user);
            callback=user;
            return callback;
        }

        function findUserByUsername (username) {
            for (var u in currentUsers.users) {
                if (currentUsers.users[u].username === username) {
                    return currentUsers.users[u];
                }
            }
            return null;
        }

        function findUserByCredentials(username, password, callback) {
            for (var u in currentUsers.users) {
              //  console.log(currentUsers.users[u].username);
                if (currentUsers.users[u].username === username &&
                    currentUsers.users[u].password === password) {
                    console.log("FOUND");
                    callback=currentUsers.users[u];
                    return callback;
                }
            }
            return null;
        }

        function updateUser (userId, user, callback) {
            for (var u in currentUsers.users) {
                if (currentUsers.users[u]._id === userId) {
                    currentUsers.users[u]=user;
                    callback=currentUsers.users[u];
                    return callback;
                }
            }
            return null;

        }

        function findAllUsers(callback){
            callback=currentUsers.users;
            return callback;

        }
        function deleteUserById(userId, callback){
            for (var u in currentUsers.users) {
                if (currentUsers.users[u]._id === userId) {
                    currentUsers.users[u].remove();
                    callback=currentUsers.users;
                    return callback;
                }
            }
            return null;
        }
    }
})();