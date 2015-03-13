var main = function () {
    "use strict";

    var insertIntoDOM = function (myJson) {
        var obj = JSON.parse(myJson)
        $("p").text("Outcome: " + obj.outcome + ", Wins: " + obj.wins + ", Losses: " + obj.losses + ", Ties: " + obj.ties);
    };

    $.getJSON("/results.json", insertIntoDOM);

    //will want to separate these into their own functions accesible by the
    //onclick form method, then update the DOM again with the new object
    //$.post("/play/rock", insertIntoDOM, 'json');
};

$(document).ready(main);

function rock () {
    var insertRock = function (myJson) {
        var obj = JSON.parse(myJson)
        $("p").text("Outcome: " + obj.outcome + ", Wins: " + obj.wins + ", Losses: " + obj.losses + ", Ties: " + obj.ties);
    };

    $.post("/play/rock", insertRock, 'json');
};

function paper () {
    var insertPaper = function (myJson) {
        var obj = JSON.parse(myJson)
        $("p").text("Outcome: " + obj.outcome + ", Wins: " + obj.wins + ", Losses: " + obj.losses + ", Ties: " + obj.ties);
    };

    $.post("/play/paper", insertPaper, 'json');
};

function scissors () {
    var insertScissors = function (myJson) {
        var obj = JSON.parse(myJson)
        $("p").text("Outcome: " + obj.outcome + ", Wins: " + obj.wins + ", Losses: " + obj.losses + ", Ties: " + obj.ties);
    };

    $.post("/play/scissors", insertScissors, 'json');
};

function lizard () {
    var insertLizard = function (myJson) {
        var obj = JSON.parse(myJson)
        $("p").text("Outcome: " + obj.outcome + ", Wins: " + obj.wins + ", Losses: " + obj.losses + ", Ties: " + obj.ties);
    };

    $.post("/play/lizard", insertLizard, 'json');
};

function spock () {
    var insertSpock = function (myJson) {
        var obj = JSON.parse(myJson)
        $("p").text("Outcome: " + obj.outcome + ", Wins: " + obj.wins + ", Losses: " + obj.losses + ", Ties: " + obj.ties);
    };

    $.post("/play/spock", insertSpock, 'json');
};

