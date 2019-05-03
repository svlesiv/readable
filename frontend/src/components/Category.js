import React, { Component } from 'react';
import { connect } from 'react-redux'
import { sortByDate, sortPosts } from '../utils/helpers';

import Post from './Post';
import Header from './Header';
import Sort from './Sort';

class Category extends Component {
  render() {
    const { categoryPosts } = this.props;

    return (
      <div>
        <Header />
        <Sort />
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
}

function mapStateToProps ({ posts }, props) {
  const sortedByDate = sortByDate(posts);
  const sortedByVote = {};
  const sortedPosts = sortPosts(posts, sortedByDate, sortedByVote);

  const categoryName = props.match.params.category;
  const categoryPostsIndexArray = Object.keys(sortedPosts).filter(item => sortedPosts[item].category === categoryName);
  const categoryPosts = categoryPostsIndexArray.map(index => sortedPosts[index]);

  return {
    categoryPosts
  };
}

export default connect(mapStateToProps)(Category);
