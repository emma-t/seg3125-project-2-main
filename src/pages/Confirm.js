import React from "react";
import BookingDetails from "../components/BookingDetails";
import ChatBot from "../components/ChatBot";

function Donate() {
    return (
        <div className="container-fluid">
            <div className="row text-center">
                <h1>Thanks for your interest in donating!</h1>
                <h2>Book a time to donate your items <br /><br /></h2>
            </div>

            <div className="row">
                <div className="col-12 col-md-12 mx-auto">
                    <div className="progress-container">
                        <div className="progress" style={{ height: '40px', width: '100%' }}>
                            <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: '100%' }}
                                aria-valuenow="100"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            >
                                100%
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br />

            <div className="row text-center">
                <b>Your booking has been confirmed</b>
                <p>Your booking request has been receives and confirmed.<br />
                You will receive a confirmation email and text very soon.
                </p>
            </div>

            <br />

            <div className="row">
                <BookingDetails />
            </div>

            <div className="text-center">
                <div className="row">
                    <div className="col">
                        <a href="donate" className="btn btn-primary" role="button" style={{ width: '80%', paddingLeft: '10px', paddingRight: '10px', marginBottom: '10px' }}>
                            Donate Again
                        </a>
                        <a href="/" className="btn btn-primary" role="button" style={{ width: '80%', paddingLeft: '10px', paddingRight: '10px' }}>
                            Return to Home
                        </a>
                    </div>
                </div>
            </div>


            <ChatBot />
        </div>
    );
}

export default Donate;
