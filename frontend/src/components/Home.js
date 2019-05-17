import React from 'react';
import { connect } from 'react-redux'
import { sort } from '../utils/helpers';

import Post from './Post';
import Header from './Header';
import Sort from './Sort';

const Home = (props) => {
    const { sortedPosts } = props;
    return (
      <div>
        <Header />
        <Sort/>
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
