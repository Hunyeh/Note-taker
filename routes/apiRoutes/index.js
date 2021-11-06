// const app = require('express').app();
const fs = require('fs');
const savedNotes = require('../../db/db.json');

module.exports = function (app) {
    // route that displays the db.json file containing the notes
    app.get('/api/notes', (req, res) => {
        // locates the JSON file
        console.log('Fetching notes')
        res.json(savedNotes);
    });

    // allows you to put your created notes onto the server
    app.post('/api/notes', (req, res) => {
        const savedNote = req.body;
        console.log(savedNote);
    });

    // allows you to delete any notes from the server
    app.delete('/api/notes/:id', (req, res) => {

    });
};
