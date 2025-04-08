
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchJokes = createAsyncThunk(
  'jokes/fetchJokes',
  async (category = 'Any') => {
    const url = `https://v2.jokeapi.dev/joke/${category}?amount=10`;
    const response = await fetch(url);
    const data = await response.json();
    return data.jokes;
  }
);

const jokeSlice = createSlice({
  name: 'jokes',
  initialState: {
    jokes: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJokes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJokes.fulfilled, (state, action) => {
        state.loading = false;
        state.jokes = action.payload;
      })
      .addCase(fetchJokes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default jokeSlice.reducer;

