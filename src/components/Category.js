import React, { Component } from 'react';

class Category extends Component {
  render() {
    return (
        <div>
          <p>This is Category component</p>
          <div><span>map through posts</span>
            <Post/>
          </div>
        </div>
      );
  }
}

export default Category;