var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Require all database models
var db = require("./models");

// Set port to listen on
var PORT = process.env.PORT || 8080;

// Initialize Express
var app = express();

// Express-handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//app.use(logger("dev"));

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));

// Express static directory
app.use(express.static("public"));
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

// Require our routes
require('./routes/routes.js')(app);

// Start the server
app.listen(PORT, function () {
  console.log("App running on port " + PORT);
});