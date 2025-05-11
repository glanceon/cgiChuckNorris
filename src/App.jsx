import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Typography,
  Button,
  TextField,
  Box,
  MenuItem,
} from '@mui/material';
import {
  fetchRandomJoke,
  fetchJokeByCategory,
  fetchJokeBySearch,
} from './features/joke/jokeThunks';

const App = () => {
  const dispatch = useDispatch();
  const { joke, status, error } = useSelector((state) => state.joke);
  const [query, setQuery] = useState('');
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    dispatch(fetchRandomJoke());
    fetch('https://api.chucknorris.io/jokes/categories')
      .then((res) => res.json())
      .then(setCategories);
  }, [dispatch]);

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom align="center">
        Chuck Norris Joke Generator
      </Typography>

      <Box display="flex" gap={1} mb={2}>
        <TextField
          fullWidth
          label="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={() => dispatch(fetchJokeBySearch(query))}
          disabled={!query.trim()}
        >
          Search
        </Button>
      </Box>

      <Box display="flex" gap={1} mb={2}>
        <TextField
          select
          label="Category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          fullWidth
        >
          {categories.map((cat) => (
            <MenuItem key={cat} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </TextField>
        <Button
          variant="contained"
          onClick={() => dispatch(fetchJokeByCategory(selectedCategory))}
          disabled={!selectedCategory}
        >
          Get Joke
        </Button>
      </Box>

      <Button
        fullWidth
        variant="outlined"
        onClick={() => dispatch(fetchRandomJoke())}
      >
        Get Random Joke
      </Button>

      <Box mt={4}>
        {status === 'loading' && <Typography>Loading...</Typography>}
        {error && <Typography color="error">{error}</Typography>}
        {joke && (
          <Box mt={2} p={2} border="1px solid #ccc" borderRadius={2}>
            <Typography>{joke.value}</Typography>
            {joke.categories.length > 0 && (
              <Typography variant="caption" color="text.secondary">
                Category: {joke.categories[0]}
              </Typography>
            )}
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default App;
