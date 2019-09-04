const mongoose = require("mongoose");

// Create New Mongo Scheme To Store Our Data In It.
let postSchema = new mongoose.Schema({
  title: String,
  content: String,
  imgURL: String,
})

// Store The Scheme In Variable To Deal With This Variable.
let Posts = mongoose.model('posts', postSchema);

// @METHOD 'getRepositories'
// Return All Repositories From Database
let getPosts = (callBack) => {
  console.log(callBack);
  Posts.find({}, (error, response) => {
    if (error) {
      callBack(error);
    } else {
      callBack(response);
    }
  })
}


module.exports = {
  getPosts
};
