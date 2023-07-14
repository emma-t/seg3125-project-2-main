import React from "react";
import { Link } from "react-router-dom";
import Date from "../components/Date";
import Times from "../components/Times";
import ChatBot from "../components/ChatBot";

function Donate() {
  return (
    <div className="container-fluid">
      <div className="row text-center">
        <h1>Thanks for your interest in donating!</h1>
        <h2>Book a time to donate your items <br /><br/></h2>
      </div>

      <div className="row">
        <div className="col-12 col-md-12 mx-auto">
          <div className="progress-container">
            <div className="progress" style={{ height: '40px', width: '100%' }}>
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: '33%'}}
                aria-valuenow="33"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                33%
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />

      <div className="row">
        <div className="col-6">
          <Date />
        </div>
        <div className="col-6">
          <Times />
        </div>
      </div>

      <div className="row">
        <div className="col text-center">
          <Link to="/info" className="btn btn-primary mx-auto" role="button" style={{ width: '60%' }}>
            <b>Continue</b>
          </Link>
        </div>
      </div>
      <ChatBot />
    </div>
  );
}

export default Donate;
