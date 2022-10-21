import React, { useState } from "react";
import "./campaignform.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FiSearch } from "react-icons/fi";

function CampaignForm() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="campaignform">
      <div className="datepart">
        <DatePicker
          placeholderText="Start date"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
        <DatePicker
          placeholderText="End date"
          selected={endDate}
          onChange={(date) => setEndDate(date)}
        />
      </div>
      <div>
        <Form>
          {" "}
          <div className="searchpart">
            <Form.Control type="text" placeholder="Enter text" />
            <Button
              variant="primary"
              type="submit"
              onSubmit={(e) => handleSubmit(e)}
            >
              <FiSearch />
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default CampaignForm;
