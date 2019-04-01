import React, { Component } from 'react';
import Post from './Post';

class Home extends Component {
  render() {
    return (
      <div>
        <p>This is home component</p>
        <div><span>list category's names</span>
        </div>
        <div><span>map through posts</span>
          <Post/>
        </div>
      </div>
    );
  }
}

export default Home;