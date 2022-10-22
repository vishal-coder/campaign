import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { useSelector, useDispatch } from "react-redux";
import campaignStaticData from "../services/campaignData";
import budgetFormatter from "../services/NumberToWord";
import { addCampaigns } from "../store/CampaignSlice";
import "./campaigndata.css";

function CampaignDataBody() {
  const { campaignList } = useSelector((state) => state.campaign) || [];
  const { userList } = useSelector((state) => state.user) || [];
  console.log("userList", userList);
  const dispatch = useDispatch();

  console.log("campaignList inside component", campaignList);

  const handleGetDate = async () => {
    dispatch(addCampaigns(campaignStaticData));
  };

  const getUsername = (userId) => {
    let username = "Unknown";
    const user = userList.find((user) => user.id == userId);
    if (user) {
      username = user.username;
    }

    return username;
  };

  return (
    <div className="campaigndata">
      <Table striped bordered hover>
        <thead className="blue">
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Active</th>
            <th>Budget</th>
          </tr>
        </thead>
        <tbody>
          {console.log("campaignList before map", campaignList)}
          {campaignList.map((campaign, index) => (
            <tr key={campaign.id + "" + index + "" + Date.now()}>
              <td>{campaign.name}</td>
              <td>{getUsername(campaign.userId)}</td>
              <td>{campaign.startDate}</td>
              <td>{campaign.endDate}</td>
              <td>{campaign.name} Active</td>
              <td> {budgetFormatter(campaign.Budget)} USD</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <button
        onClick={() => {
          handleGetDate();
        }}
      >
        {" "}
        GetDate
      </button>
    </div>
  );
}

export default CampaignDataBody;
