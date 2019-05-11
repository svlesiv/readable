import { 
  GET_COMMENTS, ADD_COMMENT, DELETE_COMMENT, UPDATE_COMMENT, 
  UP_VOTE_COMMENT, DOWN_VOTE_COMMENT, SET_SORT_COMMENT
} from '../actions/comments';

function findKey(state, id) {
  const key = Object.keys(state).find(key => {
    if (state[key].id === id) {
      return key;
    }
  });
  return key
}

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
      const keyUpdate = findKey(state, action.comment.id);
      return {
        ...state,
        [keyUpdate]: action.comment
      };
    case DELETE_COMMENT :
      const keyDelete = findKey(state, action.comment.id);
      return {
        ...state,
        [keyDelete]: {
          deleted: true
        }
      };
    case UP_VOTE_COMMENT :
      const keyUpVote = findKey(state, action.comment.id);
      return {
        ...state,
        [keyUpVote]: {
          ...action.comment,
          voteScore: action.comment.voteScore + 1
        }
      };
    case DOWN_VOTE_COMMENT :
      const keyDownVote = findKey(state, action.comment.id);
      return {
        ...state,
        [keyDownVote]: {
          ...action.comment,
          voteScore: action.comment.voteScore - 1
        }
      };
    case SET_SORT_COMMENT :
      return {
        ...state,
        sortBy: action.sort
      };
    default :
      return state;
  }
}