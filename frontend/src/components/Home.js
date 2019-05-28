import React from 'react';
import { connect } from 'react-redux'
import { sort } from '../utils/helpers';

import Post from './Post';
import Navigation from './Navigation';
import Sort from './Sort';

const Home = (props) => {
    const { sortedPosts } = props;
    return (
      <div class="grid-wrapper">
        <header>
          <Navigation />
          <Sort/>
        </header>
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

function mapStateToProps ({ posts }) {
  const sortedPosts = sort(posts);

  return {
    sortedPosts
  };
}

export default connect(mapStateToProps)(Home);
