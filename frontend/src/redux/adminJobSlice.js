import { createSlice } from "@reduxjs/toolkit";

const adminJobSlice = createSlice({
  name: "adminJob",
  initialState: {
    allAdminJobs: [],
    searchJobByText: "",
  },
  reducers: {
    //actions
    setAllAdminJobs: (state, action) => {
      state.allAdminJobs = action.payload;
    },
    setSearchJobByText: (state, action) => {
      state.searchJobByText = action.payload;
    },
  },
});
export const { setAllAdminJobs, setSearchJobByText } = adminJobSlice.actions;
export default adminJobSlice.reducer;
