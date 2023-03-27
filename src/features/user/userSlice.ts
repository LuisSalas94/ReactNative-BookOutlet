import {createSlice} from '@reduxjs/toolkit';

export type User = {
  user: string;
  signedIng: boolean;
};

const initialState: User = {
  user: '',
  signedIng: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
    signIn: state => {
      state.signedIng = true;
    },
    signOut: state => {
      state.signedIng = false;
    },
  },
});

//* Export actions
export const {addUser, signIn, signOut} = userSlice.actions;

//* Export reducer
export default userSlice.reducer;
