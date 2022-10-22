import React, { useEffect } from "react";
import "./campaigndata.css";
import Table from "react-bootstrap/Table";
import campaignStaticData from "../services/campaignData";
import { useDispatch, useSelector } from "react-redux";
import { addCampaigns } from "../store/CampaignSlice";
import budgetFormatter from "../services/NumberToWord";

function CampaignDataBody() {
  const { campaignList } = useSelector((state) => state.campaign) || [];
  const dispatch = useDispatch();
  console.log("campaignList inside component", campaignList);
  useEffect(() => {}, []);
  const handleGetDate = () => {
    dispatch(addCampaigns(campaignStaticData));
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
              <td>campaign{campaign.id}</td>
              <td>{campaign.name}</td>
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
