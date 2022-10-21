import React from "react";
import "./campaign.css";
import CampaignData from "./CampaignData";
import CampaignForm from "./CampaignForm";

function Campaign() {
  return (
    <div className="campaignwrapper">
      <CampaignForm />
      <CampaignData />
    </div>
  );
}

export default Campaign;
