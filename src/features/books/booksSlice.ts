import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {Book} from '../../interfaces/bookInterface';
//* Book URL
const baseURL =
  'https://fernando-bookstore.netlify.app/.netlify/functions/api/books';

//* Book Interface
export type Books = {
  books: Book[];
  isLoading: boolean;
};

//* Initial State
const initialState: Books = {
  books: [],
  isLoading: false,
};

//* Books Thunk Function
export const fetchAsyncBooks = createAsyncThunk(
  'books/fetchAsyncBooks',
  async () => {
    const response = await axios(baseURL);
    return response.data;
  },
);

//* Book Slice
const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchAsyncBooks.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchAsyncBooks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    });
    builder.addCase(fetchAsyncBooks.rejected, state => {
      state.isLoading = false;
    });
  },
});

//* Export actions

//* Export reducer
export default booksSlice.reducer;
