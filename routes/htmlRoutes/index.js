const path = require('path');
const router = require('express').Router();

// route that displays the index.html page in the browser
router.get('/', (req, res) => {
    // locates file we are sending to the server
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// route that displays the notes.html page
router.get('/notes', (req, res) => {
    // locates the actual file to display
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// 
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;