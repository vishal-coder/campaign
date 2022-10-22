import { createSlice } from "@reduxjs/toolkit";

const campaignSlice = createSlice({
  name: "campaign",
  initialState: {
    campaignList: [],
  },
  reducers: {
    addCampaigns: (state, action) => {
      //   console.log("action", action.payload);
      state.campaignList = [...state.campaignList, ...action.payload];
      //   console.log("addCampaigns", state.campaignList);
    },
  },
});

export default campaignSlice.reducer;
export const { addCampaigns } = campaignSlice.actions;
