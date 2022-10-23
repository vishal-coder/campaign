import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FiSearch } from "react-icons/fi";
import "./campaignform.css";
import { useSelector, useDispatch } from "react-redux";
import {
  setEndDate,
  setSearchText,
  setStartDate,
} from "../store/CampaignSlice";

function CampaignForm() {
  const [startDateFilter, setStartDateFilter] = useState("");
  const [endDateFilter, setEndDateFilter] = useState("");
  const [searchString, setSearchString] = useState("");
  const dispatch = useDispatch();

  const handleSearchText = (searchtext) => {
    setSearchString(searchtext);
    dispatch(setSearchText(searchtext));
  };

  const handleStartDate = (date) => {
    if (endDateFilter && endDateFilter - date < 0) {
      alert("start date can not be greater than end date");
      return;
    }
    setStartDateFilter(date);
    if (date) {
      dispatch(setStartDate(date.toString()));
    } else {
      dispatch(setStartDate(null));
    }
  };
  const handleEndDate = (date) => {
    if (date - startDateFilter < 0) {
      alert("End date can not be lower than Start date");
      return;
    }
    setEndDateFilter(date);
    if (date) {
      dispatch(setEndDate(date.toString()));
    } else {
      dispatch(setEndDate(null));
    }
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
          selected={startDateFilter}
          onChange={(date) => handleStartDate(date)}
          dateFormat="MM/dd/yyyy"
        />
        <DatePicker
          placeholderText="End date"
          minDate={startDateFilter}
          selected={endDateFilter}
          onChange={(date) => handleEndDate(date)}
          dateFormat="MM/dd/yyyy"
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
