import {createSlice} from '@reduxjs/toolkit';

export type User = {
  user: string;
};

const initialState: User = {
  user: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    //* Add user
    addUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

//* Export actions
export const {addUser} = userSlice.actions;

//* Export reducer
export default userSlice.reducer;
