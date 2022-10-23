import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FiSearch } from "react-icons/fi";
import "./campaignform.css";
import { useSelector, useDispatch } from "react-redux";
import { setSearchText } from "../store/CampaignSlice";

function CampaignForm() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [searchString, setSearchString] = useState("");
  const dispatch = useDispatch();

  const handleSearchText = (searchtext) => {
    setSearchString(searchtext);
    dispatch(setSearchText(searchtext));
  };

  const handleStartDate = (date) => {
    if (endDate && endDate - date < 0) {
      alert("start date can not be greater than end date");
      return;
    }
    setStartDate(date);
  };
  const handleEndDate = (date) => {
    if (date - startDate < 0) {
      alert("End date can not be lower than end date");
      return;
    }
    setEndDate(date);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setSearchText(searchString));
  };

  return (
    <div className="campaignform">
      <div className="datepart">
        <DatePicker
          placeholderText="Start date"
          selected={startDate}
          onChange={(date) => handleStartDate(date)}
          dateFormat="dd/MM/yyyy"
        />
        <DatePicker
          placeholderText="End date"
          minDate={startDate}
          selected={endDate}
          onChange={(date) => handleEndDate(date)}
          dateFormat="dd/MM/yyyy"
        />
      </div>
      <div>
        <Form>
          {" "}
          <div className="searchpart">
            <Form.Control
              type="text"
              placeholder="Enter Search text"
              onKeyUp={(e) => {
                handleSearchText(e.target.value);
              }}
            />
            {/* <Button
              variant="primary"
              type="submit"
              onClick={(e) => handleSubmit(e)}
            ></Button> */}
          </div>
        </Form>
      </div>
    </div>
  );
}

export default CampaignForm;
