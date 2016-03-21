




var express = require('express');
var app = express();

require("./public/assignment/server/app.js")(app);
app.use(express.static(__dirname + '/public'));
var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;


app.get('http://localhost:3000/api/assignment/loggedin', function(req,res){
    console.log("here!!!");
})



app.listen(port, ipaddress);


