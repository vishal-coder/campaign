import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userList: null,
  },
  reducers: {
    setUserList: (state, action) => {
      state.userList = [...action.payload];
    },
  },
});

export default userSlice.reducer;
export const { setUserList } = userSlice.actions;
