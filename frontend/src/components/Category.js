import React, { Component } from 'react';
import { connect } from 'react-redux'

import Post from './Post';
import Header from './Header';

class Category extends Component {
  render() {
    const { categoryPosts } = this.props;

    return (
      <div>
        <Header />
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
  const categoryName = props.match.params.category;
  const categoryPostsIndexArray = Object.keys(posts).filter(item => posts[item].category === categoryName);
  const categoryPosts = categoryPostsIndexArray.map(index => posts[index]);

  return {
    categoryPosts,
    posts
  };
}

export default connect(mapStateToProps)(Category);
