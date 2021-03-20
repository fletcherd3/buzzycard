
// Importing Modules
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// importing files
const routes = require('./routes');

// Define Global Variables
const app = express();
const log = console.log;
const PORT = process.env.PORT || 8080; 


mongoose.connect( process.env.MONGODB_URI || 'mongodb+srv://heroku_hpcshbjs:Password1@buzzy-card-cluster.ohvhz.mongodb.net/heroku_hpcshbjs?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

// Configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', routes);

if (process.env.NODE_ENV === 'production') {

    app.use((req, res, next) => {
        if (req.header('x-forwarded-proto') !== 'https')
          res.redirect(`https://${req.header('host')}${req.url}`)
        else
          next()
      })

    app.use(express.static( 'client/build' ));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); // relative path
    });
}

app.listen(PORT, () => {
    log(`Server is starting at PORT: ${PORT}`);
});