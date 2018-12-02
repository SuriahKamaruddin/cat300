var express = require("express");
var path = require('path');

var port = process.env.PORT || 8081;
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use("/", function(req, res) {
    res.sendFile("./index.html");
});

app.listen(port, function() {
    console.log("Server is running...");
});
