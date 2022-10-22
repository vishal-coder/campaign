import { configureStore } from "@reduxjs/toolkit";
import CampaignSlice from "./CampaignSlice";

const store = configureStore({
  reducer: {
    campaign: CampaignSlice,
  },
});
export default store;
