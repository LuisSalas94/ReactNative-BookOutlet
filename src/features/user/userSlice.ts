import {createSlice} from '@reduxjs/toolkit';

export type User = {
  user: string;
  signedIng: boolean;
  email: string;
};

const initialState: User = {
  user: '',
  signedIng: false,
  email: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
    addEmail: (state, action) => {
      state.email = action.payload;
    },
    signIn: state => {
      state.signedIng = true;
    },
    signout: state => {
      state.signedIng = false;
    },
  },
});

//* Export actions
export const {addUser, signIn, signout, addEmail} = userSlice.actions;

//* Export reducer
export default userSlice.reducer;
