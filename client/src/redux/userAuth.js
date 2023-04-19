import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isAdmin: false,
    id: null
  },
  reducers: {
    logIn: (state, action) => {
      state.isAdmin = action.payload.isAdmin;
      state.currentUser = action.payload.name;
      state.id = action.payload.id;
    },
    logOut: (state) => {
        state.isAdmin = false;
      state.currentUser = null;
      state.id = null
    }
  },
});

export const {  logIn, logOut} = userSlice.actions;
export default userSlice.reducer;