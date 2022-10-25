import { createSlice } from "@reduxjs/toolkit";

const campaignSlice = createSlice({
  name: "campaign",
  initialState: {
    campaignList: [],
    searchText: "",
    startDate: null,
    endDate: null,
  },
  reducers: {
    addCampaigns: (state, action) => {
      state.campaignList = [...state.campaignList, ...action.payload];
      state.searchText = "";
    },

    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },

    setStartDate: (state, action) => {
      state.startDate = action.payload;
    },

    setEndDate: (state, action) => {
      state.endDate = action.payload;
    },
  },
});

export default campaignSlice.reducer;
export const { addCampaigns, setSearchText, setStartDate, setEndDate } =
  campaignSlice.actions;
