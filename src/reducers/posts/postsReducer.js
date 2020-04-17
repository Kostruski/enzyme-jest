import types from '../../types';

const { GET_POSTS } = types;

const postReducer = (state = [], action) => {
  switch (action.type) {
    case GET_POSTS:
      return action.payload;

    default:
      return state;
  }
};

export default postReducer;
