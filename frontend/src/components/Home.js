import React, { Component } from 'react';
import Post from './Post';
import { connect } from 'react-redux'

class Home extends Component {
  render() {
    const { categories, posts } = this.props;
    
    return (
      <div>
        <span>map through categories</span>
        <ul>
          {
            Object.keys(categories).map(index => (
            <li key={index}>{categories[index].name}</li>
          ))}
        </ul>
        <span>map through posts</span>
          <ul>
            {
              Object.keys(posts).map(index => (
              <li key={index}>{posts[index].title}</li>
            ))}
          </ul>
      </div>
    );
  }
}

function mapStateToProps ({ categories, posts }) {
  return {
    categories,
    posts
  };
}

export default connect(mapStateToProps)(Home);