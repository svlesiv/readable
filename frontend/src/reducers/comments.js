import { GET_COMMENTS, ADD_COMMENT, DELETE_COMMENT, UPDATE_COMMENT, UP_VOTE_COMMENT, DOWN_VOTE_COMMENT } from '../actions/comments';

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
    case UPDATE_COMMENT :
      const key = Object.keys(state).find(key => {
        if (state[key].id === action.comment.id) {
          return key;
        }
      });
      return {
        ...state,
        [key]: action.comment
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
    case UP_VOTE_COMMENT :
      const e = Object.keys(state).find(key => {
        if(state[key].id === action.comment.id) {
          return key;
        }
      });
      return {
        ...state,
        [e]: {
          ...action.comment,
          voteScore: action.comment.voteScore + 1
        }
      };
    case DOWN_VOTE_COMMENT :
      const c = Object.keys(state).find(key => {
        if(state[key].id === action.comment.id) {
          return key;
        }
      });
      return {
        ...state,
        [c]: {
          ...action.comment,
          voteScore: action.comment.voteScore - 1
        }
      };
    default :
      return state;
  }
}