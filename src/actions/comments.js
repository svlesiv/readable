export const GET_COMMENTS = 'GET_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';

export function getComments (commments) {
  return {
    type: GET_COMMENTS,
    commments,
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