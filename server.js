const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// listens to the connection server allowing you to use a local server
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
});
