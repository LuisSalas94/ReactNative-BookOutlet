import {createSlice} from '@reduxjs/toolkit';
import {Book} from '../../interfaces/bookInterface';

//* Favorites Interface
export type Favorites = {
  favorites: Book[];
};

//* Initial State
const initialState: Favorites = {
  favorites: [],
};

//* Favorites Slice
const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    //* Add to favorites
    addToFavorites: (state, action) => {
      const book = action.payload;
      const bookExists = state.favorites.find(fav => fav.isbn === book.isbn);
      if (!bookExists) {
        state.favorites.push(book);
      }
    },
    //* Remove from favorites
    removeFromFavorites: (state, action) => {
      const book = action.payload;
      state.favorites = state.favorites.filter(fav => fav.isbn !== book.isbn);
    },
  },
});

//* Export actions
export const {addToFavorites, removeFromFavorites} = favoritesSlice.actions;

//* Export reducer
export default favoritesSlice.reducer;
