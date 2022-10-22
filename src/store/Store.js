import { configureStore } from "@reduxjs/toolkit";
import CampaignSlice from "./CampaignSlice";
import UserSlice from "./UserSlice";

const store = configureStore({
  reducer: {
    campaign: CampaignSlice,
    user: UserSlice,
  },
});
export default store;
