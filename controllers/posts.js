const posts = require("../models/posts");
const express = require("express");
const router = express.Router();

// @GET
// To Check If Server Works Or Not
// localhost:9000/posts
router.get('/', (req, res) => {
    posts.getPosts(result => {
        res.json(result)
    })
})

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


module.exports = router;
