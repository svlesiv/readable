import React from 'react';
import { connect } from 'react-redux'
import { sort } from '../utils/helpers';

import Post from './Post';
import Navigation from './Navigation';
import Sort from './Sort';

const Category = (props) => {
  const { categoryPosts } = props;
  return (
    <div class="grid-wrapper">
      <header>
        <Navigation />
        <Sort />
      </header>
      <main>
        <ul>
          {categoryPosts.map(post => (
            <li key={post.id}>
              <Post post={post} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

function mapStateToProps ({ posts }, props) {
  const sortedPosts = sort(posts);

  const categoryName = props.match.params.category;
  const categoryPostsIndexArray = Object.keys(sortedPosts).filter(item => sortedPosts[item].category === categoryName);
  const categoryPosts = categoryPostsIndexArray.map(index => sortedPosts[index]);

  return {
    categoryPosts
  };
}

export default connect(mapStateToProps)(Category);
