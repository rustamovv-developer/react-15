import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    Value: false,
  },
  reducers: {
    toggleMode(state) {
      state.value = !state.value;
    },
  },
});

export const { toggleMode } = themeSlice.actions;

export default themeSlice.reducer;
