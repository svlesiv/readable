import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setSort } from '../actions/posts';

class Sort extends Component {
  handleChange = (e) => {
    const { dispatch } = this.props;
    dispatch(setSort(e.target.value));
  }

  render(){
    return(
      <form>
        <select onChange={this.handleChange}>
          <option value = ''>---Sort By:---</option>
          <option value = 'date'>Newest first</option>
          <option value = 'vote'>Highest voted</option>
        </select>
      </form>
    )
  }
}

export default connect()(Sort);