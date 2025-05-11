import { createSlice } from '@reduxjs/toolkit';
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

const jokeSlice = createSlice({
  name: 'joke',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomJoke.fulfilled, (state, action) => {
        state.joke = action.payload;
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(fetchJokeByCategory.fulfilled, (state, action) => {
        state.joke = action.payload;
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(fetchJokeBySearch.fulfilled, (state, action) => {
        if (action.payload) {
          state.joke = action.payload;
          state.error = null;
        } else {
          state.joke = null;
          state.error = 'No joke found';
        }
        state.status = 'succeeded';
      })
      .addMatcher(
        (action) => action.type.endsWith('/pending'),
        (state) => {
          state.status = 'loading';
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        }
      );
  },
});

export default jokeSlice.reducer;
