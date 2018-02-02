const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Schema to save article 

const articleSchema = new Schema({
	title: {type: String, required:true},
	date:{type:String, required:true},
	url: {type:String, required:true},
	saved: {type: Boolean, default: false},
	summary: {type:String, required:true}
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;