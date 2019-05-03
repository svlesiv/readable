import React, { Component } from 'react';
import { connect } from 'react-redux'
import { sortByDate, sortPosts } from '../utils/helpers';

import Post from './Post';
import Header from './Header';
import Sort from './Sort';

class Home extends Component {
  render() {
    const { sortedPosts } = this.props;

    return (
      <div>
        <Header />
        <Sort />
        <main>
          <ul>
            {Object.keys(sortedPosts).map(index => (
              <li key={index}>
                <Post post={sortedPosts[index]} />
              </li>
            ))}
          </ul>
        </main>
      </div>
    );
  }
}

function mapStateToProps ({ posts }) {
  const sortedByDate = sortByDate(posts);
  const sortedByVote = {};
  const sortedPosts = sortPosts(posts, sortedByDate, sortedByVote);

  return {
    sortedPosts
  };
}

export default connect(mapStateToProps)(Home);