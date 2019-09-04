import React, { Component } from 'react';
import './App.css';
import Posts from './Posts';
import axios from 'axios';
class PostsParent extends Component {
  state = {
    posts: []
  }

  componentDidMount = () => {
    axios.get('http://localhost:9000/posts')
      .then(response => this.setState({ posts: response.data }))
      .catch(error => console.log('ERROR :', error))

  }

  render() {
    return (
      <div className="App">
        {this.state.posts.length > 0 && <Posts posts={this.state.posts} />}
      </div>
    );
  }
}

export default PostsParent;
