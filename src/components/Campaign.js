import React from "react";
import "./campaign.css";
import CampaignDataBody from "./CampaignDataBody";
import CampaignForm from "./CampaignForm";

function Campaign() {
  return (
    <div className="campaignwrapper">
      <CampaignForm />
      <CampaignDataBody />
    </div>
  );
}

export default Campaign;
