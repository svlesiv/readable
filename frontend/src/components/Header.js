import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
      <nav>
        <ul>
          <li>
            <NavLink to={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/add_post'} >Create Post</NavLink>
          </li>
          <li>
            <button onClick={this.toggleCategories}>Categories
            {showCategories
              ? (<ul>
                {Object.keys(categories).map(index => (
                  <li key={index}>
                    <NavLink  to={`/${categories[index].name}`}>{categories[index].name}</NavLink>
                  </li>
                ))}
                </ul>)
              : null}
              </button>
          </li>
        </ul>
      </nav>
    );
  }
}

function mapStateToProps ({ categories }) {
  return {
    categories
  };
}

export default connect(mapStateToProps)(Header);
