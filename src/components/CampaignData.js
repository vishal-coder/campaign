import React from "react";
import "./campaigndata.css";
import Table from "react-bootstrap/Table";

function CampaignData() {
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
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default CampaignData;
