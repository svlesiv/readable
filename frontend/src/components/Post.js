import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Post extends Component {
  render() {
    const { post } = this.props;
    return (
      <div>
        {post ? (
          <Link to={`/${post.category}/${post.id}`}>
          <h1>{post.title}</h1>
          {/* todo: set max number of characters to display */}
          <p>{post.body}</p>
        </Link>
        ) : null}
      </div>
    );
  }
}

export default Post;