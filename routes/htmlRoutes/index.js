const path = require('path');

module.exports = function (app) {
    // route that displays the index.html page in the browser
    app.get('/', (req, res) => {
        // locates file we are sending to the server
        res.sendFile(path.join(__dirname, '../../public/index.html'));
    });

    // route that displays the notes.html page
    app.get('/notes', (req, res) => {
        // locates the actual file to display
        res.sendFile(path.join(__dirname, '../../public/notes.html'));
    });

    // gets all of the relative paths incase something is input incorrectly, user still goes to correct place
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../../public/index.html'));
    });
};
