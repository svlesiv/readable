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
          <option value = '' disabled>---Sort By:---</option>
          <option value = 'dateNew'>Newest first</option>
          <option value = 'dateOld'>Oldest first</option>
          <option value = 'voteHigh'>Highest voted</option>
          <option value = 'voteLow'>Lowest voted</option>
        </select>
      </form>
    )
  }
}

export default connect()(Sort);