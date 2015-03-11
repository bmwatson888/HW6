#!/usr/bin/env node

"use strict";

var http = require("http"),
    obj,
    result,
    choice,
    wins = 0,
    ties = 0,
    losses = 0,
    outcome,
    server;

function playGame(res, choice) {

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


    result = '{"outcome": ' + outcome + ', "wins": ' + wins + ', "losses": ' + losses + ', "ties": ' + ties + '}';
    obj = JSON.parse(result);

    res.write("<!DOCTYPE html>\n");
    res.write("<html lang='en'>\n");
    res.write("<head>\n");
    res.write("<meta charset='utf-8'>\n");
    res.write("<title>Rock, Paper, Scissors, Lizard, Spock</title>\n");
    res.write("</head>\n");
    res.write("<body>\n");
    res.write("You chose: " + choice + "<br>\n");
    res.write("AI chooses: " + aiChoice + "<br><br>\n");
    res.write("Outcome: " + obj.outcome + "<br>\n");
    res.write("Wins: " + obj.wins + "<br>\n");
    res.write("Losses: " + obj.losses + "<br>\n");
    res.write("Ties: " + obj.ties + "<br>\n");
    res.write("<br><a href='../../''>Try again</a>\n");
    res.write("</body>\n");
    res.write("</html>\n");

}

function beginPage(res) {
    res.write("<!DOCTYPE html>\n");
    res.write("<html lang='en'>\n");
    res.write("<head>\n");
    res.write("<meta charset='utf-8'>\n");
    res.write("<title>Rock, Paper, Scissors, Lizard, Spock</title>\n");
    res.write("</head>\n");
    res.write("<body>\n");
    res.write("Choose your weapon:\n");
    res.write("<form method='POST' action='/play/rock'><input type='submit' value='Rock'></form>\n");
    res.write("<form method='POST' action='/play/paper'><input type='submit' value='Paper'></form>\n");
    res.write("<form method='POST' action='/play/scissors'><input type='submit' value='Scissors'></form>\n");
    res.write("<form method='POST' action='/play/lizard'><input type='submit' value='Lizard'></form>\n");
    res.write("<form method='POST' action='/play/spock'><input type='submit' value='Spock'></form>\n");
    res.write("<p id='window'></p>\n");
    res.write("</body>\n");
    res.write("</html>\n");
}


function frontPage(req, res) {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    if (req.method === "POST" && req.url === "/play/rock") {
        choice = "rock";
        playGame(res, choice);
    } else if (req.method === "POST" && req.url === "/play/paper") {
        choice = "paper";
        playGame(res, choice);
    } else if (req.method === "POST" && req.url === "/play/scissors") {
        choice = "scissors";
        playGame(res, choice);
    } else if (req.method === "POST" && req.url === "/play/lizard") {
        choice = "lizard";
        playGame(res, choice);
    } else if (req.method === "POST" && req.url === "/play/spock") {
        choice = "spock";
        playGame(res, choice);
    } else {
        beginPage(res);
    }
}


server = http.createServer(frontPage);
server.listen(3000);
var address = server.address();
console.log("RPSLS is listening at http://localhost:" + address.port + "/");