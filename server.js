const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// allows you to use the api routes
app.use('/api/', apiRoutes);
app.use('/', htmlRoutes);

// listens to the connection server allowing you to use a local server
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
});
