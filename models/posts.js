const mongoose = require("mongoose");

// Create New Mongo Scheme To Store Our Data In It.
let postSchema = new mongoose.Schema({
  title: String,
  content: String,
  imgURL: String
})

// Store The Scheme In Variable To Deal With This Variable.
let Posts = mongoose.model('posts', postSchema);

// @METHOD 'getPosts'
// Return All Posts From Database
let getPosts = (callBack) => {
  Posts.find({}, (error, response) => {
    if (error) {
      callBack(error);
    } else {
      console.log('database response', response)
      callBack(response);
    }
  })
}

// @METHOD
// Add Specific Post To Database.
let addNewPost = (newPost, callBack) => {
  Posts.create(newPost, (error, response) => {
    if (error) {
      callBack(error)
    } else {
      getPosts(callBack)
    }
  })
}

// @ METHOD
// Delete Specific Post From Database.
let deletePost = (postID, callBack) => {
  Posts.findOneAndDelete({ _id: postID }, (error, response) => {
    if (error) {
      callBack(error);
    } else {
      getPosts(callBack);
    }
  })
}


module.exports = {
  getPosts,
  addNewPost,
  deletePost

};
