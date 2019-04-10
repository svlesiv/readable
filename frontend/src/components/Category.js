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
          <p>This is Category component</p>
          <div>
            <Post post={categoryPosts} />
          </div>
        </div>
      );
  }
}

function mapStateToProps ({ posts }, props) {
  const categoryName = props.match.params.category;
  let categoryPostsIndex = Object.keys(posts).filter(item => posts[item].category === categoryName);
  
  return {
    categoryPosts: posts[categoryPostsIndex]
  };
}

export default connect(mapStateToProps)(Category);
