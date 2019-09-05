const posts = require("../models/posts");
const express = require("express");
const router = express.Router();

// @GET
// To Check If Server Works Or Not

<<<<<<< HEAD
// localhost:9000/posts
router.get('/', (req, res) => {
    // console.log('SERVER get request line 10')

    posts.getPosts(result => {
        // console.log('result', result);    
=======
app.get('/', (req, res) => {
    res.json('Server Works *.* ')
})

// @GET
// Return All Repositories From Database
app.get('/posts', (req, res) => {

    mongo.getPosts(result => {
>>>>>>> aea8d009cc65e47ba3729fdc10df1f07ecf79165
        res.json(result)
    })
})

<<<<<<< HEAD
/*
//  @GET
//  Return All Posts From Database
//  localhost:9000/posts/posts
 router.get('/posts', (req, res) => {
    posts.getPosts(result => {
        res.json(result)
    })
}) */

// @POST
// Add Specific Post To Database.
router.post('/', (req, res) => {
    posts.addNewPost(req.body, (response) => {
        res.json(response);
    })
})

// @DELETE
// Delete Specific Post To Database.
router.delete('/:id', (req, res) => {
    let postID = req.params.id
    posts.deletePost(postID, response => {
        res.json(response);
    })
})

=======
/// ______________________________________________
>>>>>>> aea8d009cc65e47ba3729fdc10df1f07ecf79165

module.exports = router;
