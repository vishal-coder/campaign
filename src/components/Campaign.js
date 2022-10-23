import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import campaignStaticData from "../services/campaignData";
import { addCampaigns } from "../store/CampaignSlice";
import "./campaign.css";
import CampaignDataBody from "./CampaignDataBody";
import CampaignForm from "./CampaignForm";

function Campaign() {
  const dispatch = useDispatch();

  function AddCampaigns(campaignData) {
    if (!campaignData) {
      console.log("please pass array of campaigns");
      return;
    }
    dispatch(addCampaigns(campaignData));
  }

  useEffect(() => {
    window.AddCampaigns = AddCampaigns;
  }, []);
  return (
    <div className="campaignwrapper">
      <CampaignForm />
      <CampaignDataBody />
    </div>
  );
}

export default Campaign;
