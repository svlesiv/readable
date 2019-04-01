import React, { Component } from 'react';
import Comment from './Comment';

class PostDetail extends Component {
  render() {
    return (
      <div>
        <p>This is PostDetail</p>
        <div><span>map through Comments</span>
          <Comment/>
        </div>
      </div>
    );
  }
}

export default PostDetail;