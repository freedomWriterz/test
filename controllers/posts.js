const posts = require("../models/posts");
const express = require("express");
const router = express.Router();

// @GET
// To Check If Server Works Or Not

app.get('/', (req, res) => {
    res.json('Server Works *.* ')
})

// @GET
// Return All Repositories From Database
app.get('/posts', (req, res) => {

    mongo.getPosts(result => {
        res.json(result)
    })
})

/// ______________________________________________

module.exports = router;
