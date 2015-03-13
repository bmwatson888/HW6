var express = require("express"),
	http = require("http"),
	app = express(),
	outcome = "",
	wins = 0,
	losses = 0,
	ties = 0,
	choice,
	myJson = '{}';

app.use(express.static(__dirname + "/client"));

http.createServer(app).listen(3000);

app.get("/results.json", function (req, res) {
	res.json(myJson);
});

app.post("/play/rock", function (req, res) {
	//we got a rock post, so run the function that plays the game
	choice = "rock";
	playGame();
	//once done, return the JSON object back to the page
	res.json(myJson);
	console.log("rock chosen");
});

app.post("/play/paper", function (req, res) {
	//we got a paper post, so run the function that plays the game
	choice = "paper";
	playGame();
	//once done, return the JSON object back to the page
	res.json(myJson);
	console.log("paper chosen");
});

app.post("/play/scissors", function (req, res) {
	//we got a scissors post, so run the function that plays the game
	choice = "scissors";
	playGame();
	//once done, return the JSON object back to the page
	res.json(myJson);
	console.log("scissors chosen");
});

app.post("/play/lizard", function (req, res) {
	//we got a lizard post, so run the function that plays the game
	choice = "lizard";
	playGame();
	//once done, return the JSON object back to the page
	res.json(myJson);
	console.log("lizard chosen");
});

app.post("/play/spock", function (req, res) {
	//we got a spock post, so run the function that plays the game
	choice = "spock";
	playGame();
	//once done, return the JSON object back to the page
	res.json(myJson);
	console.log("spock chosen");
});

function playGame() {
	//game logic goes here
    var plays = ["rock","paper","scissors","lizard","spock"];
    var aiChoice = plays[Math.floor((Math.random() * 4) + 0)];

    if (choice === aiChoice) {
        outcome = "\"tie\"";
        ties++;
    } else if (choice === "rock") {
        if (aiChoice === "scissors") {
            outcome = "\"win\"";
            wins++;
        } else if (aiChoice === "paper") {
            outcome = "\"lose\"";
            losses++;
        } else if (aiChoice === "lizard") {
            outcome = "\"win\"";
            wins++;
        } else {
            outcome = "\"lose\"";
            losses++;
        }
    } else if (choice === "scissors") {
        if (aiChoice === "rock") {
            outcome = "\"lose\"";
            losses++;
        } else if (aiChoice === "paper") {
            outcome = "\"win\"";
            wins++;
        } else if (aiChoice === "lizard") {
            outcome = "\"win\"";
            wins++;
        } else {
            outcome = "\"lose\"";
            losses++;
        }
    } else if (choice === "paper") {
        if (aiChoice === "rock") {
            outcome = "\"win\"";
            wins++;
        } else if (aiChoice === "scissors") {
            outcome = "\"lose\"";
            losses++;
        } else if (aiChoice === "lizard") {
            outcome = "\"lose\"";
            losses++;
        } else {
            outcome = "\"win\"";
            wins++;
        }
    } else if (choice === "lizard") {
        if (aiChoice === "rock") {
            outcome = "\"lose\"";
            losses++;
        } else if (aiChoice === "scissors") {
            outcome = "\"lose\"";
            losses++;
        } else if (aiChoice === "paper") {
            outcome = "\"win\"";
            wins++;
        } else {
            outcome = "\"win\"";
            wins++;
        }
    } else if (choice === "spock") {
        if (aiChoice === "rock") {
            outcome = "\"win\"";
            wins++;
        } else if (aiChoice === "scissors") {
            outcome = "\"win\"";
            wins++;
        } else if (aiChoice === "lizard") {
            outcome = "\"lose\"";
            losses++;
        } else {
            outcome = "\"lose\"";
            losses++;
        }
    }
    
	myJson = '{"choice": "' + choice + '", "aichoice": "' + aiChoice + '", "outcome": ' + outcome + ', "wins": "' + wins + '", "losses": "' + losses + '", "ties": "' + ties + '"}';	
};
