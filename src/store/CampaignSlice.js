import { createSlice } from "@reduxjs/toolkit";

const campaignSlice = createSlice({
  name: "campaign",
  initialState: {
    campaignList: [],
    searchText: "",
  },
  reducers: {
    addCampaigns: (state, action) => {
      //   console.log("action", action.payload);
      state.campaignList = [...state.campaignList, ...action.payload];
      state.searchText = "";
      //   console.log("addCampaigns", state.campaignList);
    },

    setSearchText: (state, action) => {
      //   console.log("set search text called");
      // const searchText = action.payload;
      state.searchText = action.payload;
    },
  },
});

export default campaignSlice.reducer;
export const { addCampaigns, setSearchText } = campaignSlice.actions;
