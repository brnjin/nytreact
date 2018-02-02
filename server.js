//Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const path = require("path");
const logger = require("morgan")

const PORT = process.env.PORT || 3001;


//Cofig body parser for AJAX
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use(logger("combined"));

//Static assets
app.use(express.static(path.join(__dirname, "client/build")));    

//For API and view routes
app.use(routes);

//Set up for mongoose
mongoose.Promise = global.Promise;
//Mongo DB connect
mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost/nytreact",
	{
		useMongoClient:true
	}
);

//Start API server
app.listen(PORT, () => {
	console.log(`API Server now listening on PORT ${PORT}!`);
});