import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useSelector, useDispatch } from "react-redux";
import campaignStaticData from "../services/campaignData";
import { formatDate } from "../services/dateService";
import budgetFormatter from "../services/NumberToWord";
import { addCampaigns } from "../store/CampaignSlice";
import "./campaigndata.css";

function CampaignDataBody() {
  const { campaignList, searchText, startDate, endDate } = useSelector(
    (state) => state.campaign
  );
  const { userList } = useSelector((state) => state.user) || [];
  const [localList, setLocalList] = useState(campaignList);
  const dispatch = useDispatch();

  const handleGetDate = async () => {
    dispatch(addCampaigns(campaignStaticData));
  };

  useEffect(() => {
    if (true) {
      const updatedList = campaignList.filter((campaign) => {
        return campaign.name.toLowerCase().includes(searchText.toLowerCase());
      });
      setLocalList(updatedList);
    }
    if (!searchText) {
      setLocalList(campaignList);
    }
  }, [searchText]);

  useEffect(() => {
    setLocalList(campaignList);
  }, [campaignList]);

  useEffect(() => {
    if (startDate && endDate) {
      const updatedList = campaignList.filter((campaign) => {
        const sDate = new Date(startDate);
        const eDate = new Date(endDate);
        const campaignStartDate = new Date(campaign.startDate);
        const campaignEndDate = new Date(campaign.endDate);

        // for start date between date filter
        if (campaignStartDate > sDate && campaignStartDate < eDate) {
          return campaign;
        }

        // for end date between date filter
        if (campaignEndDate > sDate && campaignEndDate < eDate) {
          return campaign;
        }
      });
      setLocalList(updatedList);
    } else {
      setLocalList(campaignList);
    }
  }, [startDate, endDate]);

  const getUsername = (userId) => {
    let username = "Unknown";
    const user = userList.find((user) => user.id == userId);
    if (user) {
      username = user.username;
    }
    return username;
  };

  const isCampaignActive = (startDate, endDate) => {
    let flag = false;
    const currDate = dateFormater(new Date());
    const sDate = new Date(startDate);
    const eDate = new Date(endDate);
    const cDate = new Date(currDate);
    // console.log("startDate", sDate, sDate instanceof Date);
    // console.log("endDate", eDate, eDate instanceof Date);
    // console.log("currDate", cDate, cDate instanceof Date);

    if (cDate > sDate && cDate < eDate) {
      // console.log("date is between the 2 dates");
      flag = true;
    }
    return flag;
  };

  const dateFormater = (currentDate) => {
    var month = currentDate.getMonth() + 1;
    if (month < 10) month = "0" + month;
    var dateOfMonth = currentDate.getDate();
    if (dateOfMonth < 10) dateOfMonth = "0" + dateOfMonth;
    var year = currentDate.getFullYear();
    var formattedDate = month + "/" + dateOfMonth + "/" + year;
    // console.log("final formated date", formattedDate);
    return formattedDate;
  };

  return (
    <div className="campaigndata">
      {campaignList ? (
        <>
          <Table bordered hover>
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
              {/* {console.log("campaignList before map", campaignList)} */}
              {localList.map((campaign, index) => (
                <tr key={campaign.id + "" + index + "" + Date.now()}>
                  <td> {campaign.name}</td>
                  <td>{getUsername(campaign.userId)}</td>
                  <td>{campaign.startDate}</td>
                  <td>{campaign.endDate}</td>
                  <td>
                    {/* {isCampaignActive(campaign.startDate, campaign.endDate) ? ( */}
                    <div className="activewrapper">
                      <div
                        className={
                          isCampaignActive(campaign.startDate, campaign.endDate)
                            ? "Active"
                            : " InActive"
                        }
                      >
                        {" "}
                      </div>{" "}
                      <div className="activeText">
                        {" "}
                        {isCampaignActive(campaign.startDate, campaign.endDate)
                          ? "Active"
                          : " InActive"}
                      </div>
                    </div>
                    {/* ) : (
                  " Inactive"
                ) */}
                  </td>
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
        </>
      ) : (
        "Data is loading"
      )}
    </div>
  );
}

export default CampaignDataBody;
