import React, { Component } from 'react';
import PostsPage from './PostsPage';
import axios from 'axios';
class PostsParent extends Component {
  state = {
    posts: []
  }

  componentDidMount = () => {
     axios.get('http://localhost:9000/posts')
      .then(response => this.setState({ posts: response.data }))
      .catch(error => console.log('ERROR :', error))

      console.log('state :', this.state.posts);
  }

  render() {
    return (
      <div className="App">
        {this.state.posts && <PostsPage posts={this.state.posts} />}
      </div>
    );
  }
}

export default PostsParent;
