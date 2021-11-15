const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const roleRoutes = require('./routes/role');
const userRoutes = require('./routes/user');
const destinationRoutes = require('./routes/destination');
const mailRoutes = require('./routes/mail');

mongoose.connect('mongodb+srv://User1:GAKdjyyyKZBIX6g7@mycluster.upxko.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
app.use(bodyParser.json());
app.use('/api/role', roleRoutes);
app.use('/api/auth', userRoutes);
app.use('/api/destination', destinationRoutes);
app.use('/api/mail', mailRoutes);

module.exports = app;