import { fetchComments } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

export const GET_COMMENTS = 'GET_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';

function getComments (comments) {
  return {
    type: GET_COMMENTS,
    comments,
  };
}

export function addComment (comment) {
  return {
    type: ADD_COMMENT,
    comment,
  };
}

export function deleteComment (comment) {
  return {
    type: DELETE_COMMENT,
    comment,
  };
}

export function updateComment (comment) {
  return {
    type: UPDATE_COMMENT,
    comment,
  };
}

export function handleGetComments(postId) {
  return (dispatch) => {
    dispatch(showLoading());
    return fetchComments(postId)
      .then((comments) => {
        dispatch(getComments(comments));
        dispatch(hideLoading());
      });
  };
}