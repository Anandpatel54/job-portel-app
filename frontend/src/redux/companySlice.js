import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
  name: "company",
  initialState: {
    singleCompany: null,
    companies: [],
    searchCompantByText: "",
  },
  reducers: {
    //actions
    setSingleCompany: (state, action) => {
      state.singleCompany = action.payload;
    },
    setCompanies: (state, action) => {
      state.companies = action.payload;
    },
    setSearchCompantByText: (state, action) => {
      state.searchCompantByText = action.payload;
    },
  },
});
export const { setSingleCompany, setCompanies, setSearchCompantByText } =
  companySlice.actions;
export default companySlice.reducer;