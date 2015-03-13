var express = require("express"),
	http = require("http"),
	app = express();
	myJson = '{"outcome": "win", "wins": "3"}';

app.use(express.static(__dirname + "/client"));

http.createServer(app).listen(3000);

app.get("/results.json", function (req, res) {
	res.json({"outcome": "win", "wins": "3"});
	console.log("this ran");
	console.log(myJson);
});

app.post("/play/rock", function (req, res) {
	//we got a rock post, so run the function that plays the game

	//once done, return the JSON object back to the page
	res.json(myJson);
});

app.post("/play/paper", function (req, res) {
	//we got a paper post, so run the function that plays the game

	//once done, return the JSON object back to the page
	res.json(myJson);
});

app.post("/play/scissors", function (req, res) {
	//we got a scissors post, so run the function that plays the game

	//once done, return the JSON object back to the page
	res.json(myJson);
});

app.post("/play/lizard", function (req, res) {
	//we got a lizard post, so run the function that plays the game

	//once done, return the JSON object back to the page
	res.json(myJson);
});

app.post("/play/spock", function (req, res) {
	//we got a spock post, so run the function that plays the game

	//once done, return the JSON object back to the page
	res.json(myJson);
});
