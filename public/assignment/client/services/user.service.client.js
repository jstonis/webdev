/**
 * Created by Joscelyn on 2/27/2016.
 */

(function() {
    angular
        .module("FormBuilderApp")
        .factory("UserService", userService);

    function userService($rootScope, $http) {

        /*var currentUsers=[];
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
        return currentUsers;*/

        var api={
            createUser: createUser,
            findUserByUsername: findUserByUsername,
            findUserByCredentials: findUserByCredentials,
            findAllUsers: findAllUsers,
            deleteUserById: deleteUserById,
            updateUser: updateUser,
            setCurrentUser: setCurrentUser,
            getCurrentUser: getCurrentUser,
            login: login,
            register: register,
            logout: logout,
            getProfile: getProfile,
            setCurrentUser: setCurrentUser
        };
        return api;

      /*  function setCurrentUser (user) {
            $rootScope.currentUser = user;
        }

        function getCurrentUser () {
            return $rootScope.currentUser;
        }*/

        function getProfile(){
            return $http.get("/api/assignment/profile/"+$rootScope.currentUser._id);
        }
        function register(user){
            return $http.post("/api/assignment/register",user);
        }
        function logout(){
            return $http.post("/api/assignment/logout");
        }
        function setCurrentUser(user) {
            $rootScope.currentUser = user;
        }

        function getCurrentUser() {
            return $http.get("/api/assignment/loggedin");
        }
        function login(credentials) {
            return $http.post("/api/assignment/login", credentials);
        }
        function createUser (user, callback) {

            return $http.post("/api/assignment/user",user);
        }

        function findUserByUsername (username) {
            /*for (var u in currentUsers.users) {
                if (currentUsers.users[u].username === username) {
                    return currentUsers.users[u];
                }
            }
            return null;*/
            return $http({
                url: "/api/assignment/user",
                method: "GET",
                params: {username: username}
            });

        }

        function findUserByCredentials(username, password, callback) {
          /*  for (var u in currentUsers.users) {
              //  console.log(currentUsers.users[u].username);
                if (currentUsers.users[u].username === username &&
                    currentUsers.users[u].password === password) {
                    callback=currentUsers.users[u];
                    return callback;
                }
            }
            return null;*/

            return $http.get("/api/assignment/"+user, user)
        }

        function updateUser (userId, user, callback) {
           /* for (var u in currentUsers.users) {
                if (currentUsers.users[u]._id === userId) {
                    console.log("on the right track");
                    currentUsers.users[u]=user;
                    callback=currentUsers.users[u];
                    return callback;
                }
            }
            return null;*/

            return $http.put("/api/assignment/user/"+userId, user);

        }

        function findAllUsers(callback){
      /*      callback=currentUsers.users;
            return callback;*/
            return $http.get("/api/assignment/user");

        }
        function deleteUserById(userId, callback){
            /*for (var u in currentUsers.users) {
                if (currentUsers.users[u]._id === userId) {
                    currentUsers.users[u].remove();
                    callback=currentUsers.users;
                    return callback;
                }
            }
            return null;*/
            return $http.delete("/api/assignment/user/"+userId);
        }
    }
})();