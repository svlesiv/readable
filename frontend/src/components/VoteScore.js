import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

import { handleUpVote, handleDownVote } from '../actions/posts';

class VoteScore extends Component {
  handleUp = () => {
    const { dispatch, post } = this.props;
    dispatch(handleUpVote(post));
  }

  handleDown = () => {
    const { dispatch, post } = this.props;
    dispatch(handleDownVote(post));
  }
  render() {
    const { post } = this.props;
    
    return (
      <div className="vote">
        <button onClick={this.handleUp}><FontAwesomeIcon icon={faArrowUp}/></button>
        <p>{post.voteScore}</p>
        <button onClick={this.handleDown}><FontAwesomeIcon icon={faArrowDown}/></button>
      </div>
    )
  }
}

export default connect()(VoteScore);
