import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

class Header extends Component {
  state = {
    showCategories: false
  }
  toggleCategories = () => {
    this.setState((prev)=>({showCategories: !prev.showCategories}));
  }
  render() {
    const { categories } = this.props;
    const { showCategories } = this.state;

    return (
      <div>
        <Link to={'/'}>Home</Link>
        <button onClick={this.toggleCategories}>Categories</button>
        {showCategories ? (
          <div>
          {
            Object.keys(categories).map(index => (
            <Link key={index} to={`/${categories[index].name}`}>{categories[index].name}</Link>
          ))}
          </div>
        ) : null}
      </div>
    );
  }
}

function mapStateToProps ({ categories }) {
  return {
    categories
  };
}

export default connect(mapStateToProps)(Header);