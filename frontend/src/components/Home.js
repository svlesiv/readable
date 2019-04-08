import React, { Component } from 'react';
import Post from './Post';
import { connect } from 'react-redux'

class Home extends Component {
  render() {
    const { categories } = this.props;

    return (
      <div>
        <p>This is home component</p>
        <ul>
          {
            Object.keys(categories).map(index => (
            <li key={index}>{categories[index].name}</li>
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
    categories
  };
}

export default connect(mapStateToProps)(Home);