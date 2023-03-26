import {createSlice} from '@reduxjs/toolkit';
import {Book} from '../../interfaces/bookInterface';

//* Cart Interface
export type Cart = {
  cart: Book[];
  bookCount: number;
};

//* Initial State
const initialState: Cart = {
  cart: [],
  bookCount: 0,
};

//* Cart Slice
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    //* Add to cart
    addToCart: (state, action) => {
      const book = action.payload;
      const bookExists = state.cart.find(cart => cart.isbn === book.isbn);
      if (!bookExists) {
        state.cart.push(book);
        state.bookCount++;
      }
    },
  },
});

//* Export actions
export const {addToCart} = cartSlice.actions;

//* Export reducer
export default cartSlice.reducer;
