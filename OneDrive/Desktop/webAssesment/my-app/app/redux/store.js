
import { configureStore } from '@reduxjs/toolkit';
import jokeReducer from './slice/joke';

const store = configureStore({
  reducer: {
    jokes: jokeReducer,
  },
});

export default store;

