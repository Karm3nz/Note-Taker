// DEPENDENCIES

const express = require('express');

// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server

// Sets up the Express App
const app = express();

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// ROUTER
require('./routes/routes')(app);

// LISTENER
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});
