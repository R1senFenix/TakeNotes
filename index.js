// Dependencies
// =============================================================
const http = require("http");
const fs = require("fs");
const express = require("express");
const path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("*", function (req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/notes", function (req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "notes.html"));
});


app.get("/api/notes", function (req, res) {
    return res.json(characters);
});

// starts the server
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});