import {configureStore} from '@reduxjs/toolkit';
import booksRecucer from './features/books/booksSlice';
import userReducer from './features/user/userSlice';
import favoritesReducer from './features/favorites/favoritesSlice';
import cartReducer from './features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    books: booksRecucer,
    user: userReducer,
    favorites: favoritesReducer,
    cart: cartReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
