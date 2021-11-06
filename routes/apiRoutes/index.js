const router = require('express').Router();
const fs = require('fs');
const savedNotes = require('../../db/db.json');

// route that displays the db.json file containing the notes
router.get('/api/notes', (req, res) => {
    // locates the JSON file
    console.log('Fetching notes')
    // res.json(savedNotes);
    res.sendFile(path.join(__dirname, '../../db/db.json'));
});

// allows you to put your created notes onto the server
router.post('/api/notes', (req, res) => {
    const savedNote = req.body
});

// allows you to delete any notes from the server
router.delete('/api/notes/:id', (req, res) => {

});

module.exports = router;
