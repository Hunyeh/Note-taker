// const app = require('express').app();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
let savedNotes = require('../../db/db.json');

module.exports = function (app) {
    // route that displays the db.json file containing the notes
    app.get('/api/notes', (req, res) => {
        // locates the JSON file
        console.log('Fetching notes')
        res.json(savedNotes);
    });

    // allows you to put your created notes onto the server
    app.post('/api/notes', (req, res) => {
        req.body.id = uuidv4();
        const newNote = req.body;
        savedNotes.push(newNote);
        fs.writeFileSync('./db/db.json', JSON.stringify(savedNotes, null, 2));
        res.json(newNote);
    });

    // allows you to delete any notes from the server
    app.delete('/api/notes/:id', (req, res) => {
        savedNotes = savedNotes.filter(note => note.id != req.params.id);
        fs.writeFileSync('./db/db.json', JSON.stringify(savedNotes, null, 2));
        res.json(savedNotes)
    });
};
