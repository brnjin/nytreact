import axios from "axios";

export default {
	//Gets all articles 
	getArticles: function () {
		return axios.get("/api/articles");
	},
	//Gets book with matching id
	getArticles: function(id) {
		return axios.get("/api/articles" + id);
	},
	//Deletes article with matching id 
	deleteArticles: function(id) {
		return axios.delete("/api/articles" + id);
	},
	//Save the article to the DB
	saveArticles: function(articleData) {
		return axios.post("/api/books", articleData);
	},
	queryNYT: function(queryURL) {
		return axios.get(queryURL);
	}
};