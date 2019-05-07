import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setSort } from '../actions/posts';
import { setSortComment } from '../actions/comments';

class Sort extends Component {
  handleChange = (e) => {
    const { dispatch, sortFor } = this.props;
    if(sortFor === "comment") {
      dispatch(setSortComment(e.target.value));
    } else {
      dispatch(setSort(e.target.value));
    }
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