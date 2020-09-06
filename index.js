const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/exampleModels');

mongoose.connect(keys.mongoURI);

const app = express();

require('./routes/exampleRoutes')(app);

app.get('/', (req,res) => {
    res.send("Hey there")
})

const PORT = process.env.PORT || 5000;
app.listen(PORT);
