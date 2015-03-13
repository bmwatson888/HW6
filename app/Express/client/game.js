var main = function () {
    "use strict";

    var insertIntoDOM = function (myJson) {
        var obj = JSON.parse(myJson)
        $("p").text("Choose a weapon above to start the game!");
    };

    $.getJSON("/results.json", insertIntoDOM);
};

$(document).ready(main);

function rock () {
    var insertRock = function (myJson) {
        var obj = JSON.parse(myJson)
        $("p").html("You chose: " + obj.choice + "<br>AI Chose: " + obj.aichoice + "<br><br>Outcome: " + obj.outcome + "<br><br>Wins: " + obj.wins + "<br>Losses: " + obj.losses + "<br>Ties: " + obj.ties);
    };

    $.post("/play/rock", insertRock, 'json');
};

function paper () {
    var insertPaper = function (myJson) {
        var obj = JSON.parse(myJson)
        $("p").html("You chose: " + obj.choice + "<br>AI Chose: " + obj.aichoice + "<br><br>Outcome: " + obj.outcome + "<br><br>Wins: " + obj.wins + "<br>Losses: " + obj.losses + "<br>Ties: " + obj.ties);
    };

    $.post("/play/paper", insertPaper, 'json');
};

function scissors () {
    var insertScissors = function (myJson) {
        var obj = JSON.parse(myJson)
        $("p").html("You chose: " + obj.choice + "<br>AI Chose: " + obj.aichoice + "<br><br>Outcome: " + obj.outcome + "<br><br>Wins: " + obj.wins + "<br>Losses: " + obj.losses + "<br>Ties: " + obj.ties);
    };

    $.post("/play/scissors", insertScissors, 'json');
};

function lizard () {
    var insertLizard = function (myJson) {
        var obj = JSON.parse(myJson)
        $("p").html("You chose: " + obj.choice + "<br>AI Chose: " + obj.aichoice + "<br><br>Outcome: " + obj.outcome + "<br><br>Wins: " + obj.wins + "<br>Losses: " + obj.losses + "<br>Ties: " + obj.ties);
    };

    $.post("/play/lizard", insertLizard, 'json');
};

function spock () {
    var insertSpock = function (myJson) {
        var obj = JSON.parse(myJson)
        $("p").html("You chose: " + obj.choice + "<br>AI Chose: " + obj.aichoice + "<br><br>Outcome: " + obj.outcome + "<br><br>Wins: " + obj.wins + "<br>Losses: " + obj.losses + "<br>Ties: " + obj.ties);
    };

    $.post("/play/spock", insertSpock, 'json');
};

