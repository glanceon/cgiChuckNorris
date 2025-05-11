/* eslint-env jest */
import reducer from './jokeSlice';
import {
  fetchRandomJoke,
  fetchJokeByCategory,
  fetchJokeBySearch,
} from './jokeThunks';

const initialState = {
  joke: null,
  status: 'idle',
  error: null,
};

describe('joke reducer', () => {
  it('should handle initial state', () => {
    expect(reducer(undefined, { type: '@@INIT' })).toEqual(initialState);
  });

  it('should handle fetchRandomJoke.fulfilled', () => {
    const joke = { value: 'Chuck Norris test joke', categories: [] };
    const action = { type: fetchRandomJoke.fulfilled.type, payload: joke };
    const state = reducer(initialState, action);
    expect(state.joke).toEqual(joke);
    expect(state.status).toBe('succeeded');
  });

  it('should handle fetchJokeByCategory.fulfilled', () => {
    const joke = { value: 'Category joke', categories: ['dev'] };
    const action = { type: fetchJokeByCategory.fulfilled.type, payload: joke };
    const state = reducer(initialState, action);
    expect(state.joke).toEqual(joke);
  });

  it('should handle fetchJokeBySearch.fulfilled with results', () => {
    const joke = { value: 'Search joke', categories: [] };
    const action = { type: fetchJokeBySearch.fulfilled.type, payload: joke };
    const state = reducer(initialState, action);
    expect(state.joke).toEqual(joke);
    expect(state.error).toBeNull();
  });

  it('should handle fetchJokeBySearch.fulfilled with no results', () => {
    const action = { type: fetchJokeBySearch.fulfilled.type, payload: null };
    const state = reducer(initialState, action);
    expect(state.joke).toBeNull();
    expect(state.error).toBe('No joke found');
  });
});
