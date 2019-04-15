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
    case DELETE_COMMENT :
      const k = Object.keys(state).find(key => {
        if(state[key].id === action.comment.id) {
          return key;
        }
      });
      return {
        ...state,
        [k]: {
          deleted: true
        }
      };
    default :
      return state;
  }
}