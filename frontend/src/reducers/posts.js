import { 
  GET_POSTS, ADD_POST, DELETE_POST, UPDATE_POST, 
  UP_VOTE, DOWN_VOTE, SET_SORT 
} from '../actions/posts';

function findKey(state, id) {
  const key = Object.keys(state).find(key => {
    if (state[key].id === id) {
      return key;
    }
  });
  return key;
}

export default function posts (state = {}, action) {
  switch(action.type) {
    case GET_POSTS :
      const { posts } = action;
      return {
        ...state,
        ...posts,
      };
    case ADD_POST :
      const { post } = action;
      return {
        ...state,
        [post.id]: post
      };
    case UPDATE_POST :
      const keyUpdate = findKey(state, action.post.id);
      return {
        ...state,
        [keyUpdate]: action.post
      };
    case DELETE_POST :
      const keyDelete = findKey(state, action.post.id);
      return {
        ...state,
        [keyDelete]: {
          deleted: true
        }
      };
    case UP_VOTE :
      const keyUpVote = findKey(state, action.post.id);
      return {
        ...state,
        [keyUpVote]: {
          ...action.post,
          voteScore: action.post.voteScore + 1
        }
      };
    case DOWN_VOTE :
      const keyDownVote = findKey(state, action.post.id);
      return {
        ...state,
        [keyDownVote]: {
          ...action.post,
          voteScore: action.post.voteScore - 1
        }
      };
    case SET_SORT :
      return {
        ...state,
        sortBy: action.sort,
      };
    default :
      return state;
  }
}