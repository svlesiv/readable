import { GET_COMMENTS, ADD_COMMENT, DELETE_COMMENT, UPDATE_COMMENT } from '../actions/comments';

export default function comments (state = {}, action) {
  switch(action.type) {
    case GET_COMMENTS :
      const { comments } = action;
      return {
        ...state,
        ...comments,
      };
    case ADD_COMMENT :
      const { comment } = action;
      return {
        ...state,
        [comment.id]: comment,
      };
    default :
      return state;
  }
}