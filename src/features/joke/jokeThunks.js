import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRandomJoke = createAsyncThunk(
  'joke/fetchRandom',
  async () => {
    const response = await axios.get('https://api.chucknorris.io/jokes/random');
    return response.data;
  }
);

export const fetchJokeByCategory = createAsyncThunk(
  'joke/fetchByCategory',
  async (category) => {
    const response = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${category}`
    );
    return response.data;
  }
);

export const fetchJokeBySearch = createAsyncThunk(
  'joke/fetchBySearch',
  async (query) => {
    const response = await axios.get(
      `https://api.chucknorris.io/jokes/search?query=${query}`
    );
    const results = response.data.result;
    if (results.length > 0) {
      const random = results[Math.floor(Math.random() * results.length)];
      return random;
    }
    return null;
  }
);
