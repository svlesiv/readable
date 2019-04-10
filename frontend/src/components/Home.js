import React, { Component } from 'react';
import { connect } from 'react-redux'

import Post from './Post';
import Header from './Header';

class Home extends Component {
  render() {
    const { posts } = this.props;

    return (
      <div>
        <Header />
          <ul>
            {
              Object.keys(posts).map(index => (
              <li key={index}>
                <Post
                  post={posts[index]}
                />
              </li>
            ))}
          </ul>
      </div>
    );
  }
}

function mapStateToProps ({ posts }) {
  return {
    posts
  };
}

export default connect(mapStateToProps)(Home);