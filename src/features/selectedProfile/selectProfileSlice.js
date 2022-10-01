import { createSlice } from "@reduxjs/toolkit";

export const selectProfileSlice = createSlice({
  name: "selectedProfile",
  initialState: {
    value: {},
  },
  reducers: {
    setProfile: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setProfile } = selectProfileSlice.actions;

export default selectProfileSlice.reducer;
