import postReducer from './postsReducer';
import types from '../../types'
const { GET_POSTS } = types;

describe('Post reducer', () => {
  test('should return default state', () => {
    const newState = postReducer(undefined, {});
    expect(newState).toEqual([])
  });

  test('should update state', () => {
    const posts = [
      { title: 'title 1' },
      { title: 'title 2' },
      { title: 'title 3' },
    ];

    const newState = postReducer(undefined, {
      type: GET_POSTS,
      payload: posts,
    });

    expect(newState).toEqual(posts);
  })
  

});


