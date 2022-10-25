import React, { useState } from "react";
import "./addcampaign.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCampaigns } from "../store/CampaignSlice";
import { formatDate } from "../services/dateService";

function AddCampaign() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [budget, setBudget] = useState(0);
  const [userId, setUserId] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [addCampaignFormVisible, setAddCampaignFormVisible] = useState(false);
  const { campaignList } = useSelector((state) => state.campaign);

  const handlename = (name) => {
    setName(name);
  };
  const handleBudget = (budget) => {
    if (budget < 1) {
      alert("Budget should be greater than 0");
      return;
    }
    setBudget(budget);
  };
  const handleuserId = (userId) => {
    if (userId < 1) {
      alert("Userid should be greater than 0");
      return;
    }
    setUserId(userId);
  };

  const handleStartDate = (startDate) => {
    console.log(startDate);
    if (endDate && startDate > endDate) {
      alert("start date can not be greater than end date");
      return;
    }
    setStartDate(startDate);
  };

  const handleEndDate = (endDate) => {
    setEndDate(endDate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !budget || !userId || !startDate || !endDate) {
      alert("all fields are mandatory");
      return;
    }
    const campaignData = {
      id: campaignList.length,
      name: name,
      startDate: formatDate(startDate),
      endDate: formatDate(endDate),
      Budget: budget,
      userId: userId,
    };
    dispatch(addCampaigns([campaignData]));
    setName("");
    setBudget("");
    setUserId("");
    setStartDate(null);
    setEndDate(null);
    setAddCampaignFormVisible(!addCampaignFormVisible);
  };

  return (
    <div className="campaignFormDiv">
      <Button
        variant="primary"
        type="submit"
        onClick={(e) => setAddCampaignFormVisible(!addCampaignFormVisible)}
      >
        Add Campaign
      </Button>
      {addCampaignFormVisible ? (
        <Form className="addcampaignform">
          <Form.Group className="mb-3" controlId="formBasicDoctorName">
            <Form.Label>Campaign Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Campaign name"
              value={name}
              onChange={(e) => handlename(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDepartment">
            <Form.Label>Budget</Form.Label>
            <Form.Control
              type="number"
              placeholder="Budget in USD"
              value={budget}
              onChange={(e) => handleBudget(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDepartment">
            <Form.Label>UserId</Form.Label>
            <Form.Control
              type="number"
              placeholder="UserId"
              value={userId}
              onChange={(e) => handleuserId(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDate">
            <Form.Label>Start Date</Form.Label>
            {/* <DatePicker onChange={(date) => handleStartDate(date)} /> */}
            <DatePicker
              placeholderText="End date"
              // minDate={startDateFilter}
              selected={startDate}
              onChange={(date) => handleStartDate(date)}
              dateFormat="MM/dd/yyyy"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDate">
            <Form.Label>End Date</Form.Label>
            <DatePicker
              onChange={(date) => handleEndDate(date)}
              minDate={startDate}
              selected={endDate}
              required
            />
          </Form.Group>

          <Button
            className="submitcampaign-btn"
            variant="primary"
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </Button>
        </Form>
      ) : null}
    </div>
  );
}

export default AddCampaign;
