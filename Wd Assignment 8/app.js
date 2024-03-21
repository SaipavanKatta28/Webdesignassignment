var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var mongoose = require("mongoose");
// config
// set port
var port = process.env.PORT || 4000;
require("./src/controller/user-controller")(app)
// connect to db
mongoose.connect("mongodb://127.0.0.1:27017/user", { useNewUrlParser: true });
const cors = require('cors');
app.use(cors({
    origin: '*'
  }));
// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("X-HTTP-Method-Override"));
app.use(express.static(__dirname + "/public"));
app.listen(port);
console.log(`App started at port ${port}`);
/**
 * database connection settings
 */
mongoose.connection.on('error', function (err) {
    console.log('database connection error');
    console.log(err)
    //process.exit(1)
}); // end mongoose connection error
mongoose.connection.on('open', function (err) {
    if (err) {
        console.log("database error");
        console.log(err);
    } else {
        console.log("database connection open success");
    }
    //process.exit(1)
}); // enr mongoose connection open handler
exports = module.exports = app;