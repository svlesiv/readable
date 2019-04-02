import React, { Component } from 'react';
import Post from './Post';
import { connect } from 'react-redux'

class Home extends Component {
  render() {
    const { categoriesId, categories } = this.props;
    return (
      <div>
        <p>This is home component</p>
        <ul>
          {categoriesId.map((categoryId) => (
            <li key={categoryId}>{categories[categoryId]}</li>
          ))}
        </ul>
        <div><span>map through posts</span>
          <Post/>
        </div>
      </div>
    );
  }
}

function mapStateToProps ({ categories }) {
  return {
    categoriesId: Object.keys(categories),
    categories
  };
}

export default connect(mapStateToProps)(Home);