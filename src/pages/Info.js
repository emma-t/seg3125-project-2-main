import React from "react";
import InfoForm from "../components/InfoForm";
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
                                style={{ width: '66%'}}
                                aria-valuenow="66"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            >
                                66%
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br />

            <div className="row">
                    <InfoForm />
            </div>
            <ChatBot />
        </div>
    );
}

export default Donate;
