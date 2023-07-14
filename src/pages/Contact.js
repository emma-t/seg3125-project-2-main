import React from "react";
import ChatBot from "../components/ChatBot";

function Contact() {

    return (
        <div>
            <div className="text-center">
                <h2>Contact Us</h2> <br />
            </div>

            <div className="container-fluid d-flex justify-content-center">

                <div className="row" style={{ height: '300px', maxWidth: '100%' }}>
                    <div className="col-lg-4">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.3523471638596!2d-75.68932491411351!3d45.42239819648794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0507c6d4942b%3A0x822f56e12a53717!2suOttawa!5e0!3m2!1sen!2sca!4v1686517171656!5m2!1sen!2sca"
                            className="h-100 w-100" style={{ border: '0' }} allowFullScreen="" loading="lazy"
                        ></iframe>
                    </div>

                    <div className="col-lg-8 d-flex align-items-center">
                        <form style={{ width: '100%' }}>
                            <div className="row text-center">
                                <div className="col-md-3" style={{ marginTop: '60px' }}>
                                    <ul className="list-unstyled">
                                        <li>
                                            <i className="bi-geo-alt-fill"></i>
                                            <p><small>90 University Private<br />Ottawa, ON<br />K1N 6N5</small></p>
                                        </li>
                                        <li>
                                            <i className="bi-telephone-fill"></i>
                                            <p><small>(613) 613-6133</small></p>
                                        </li>
                                        <li>
                                            <i className="bi-envelope-fill"></i>
                                            <p><small>contact@revivemart.com</small></p>
                                        </li>

                                        <li>
                                            <p><small><b>Monday</b> 9am-6pm
                                                <br /><b>Tuesday</b> 9am-6pm
                                                <br /><b>Wednesday</b> 9am-6pm
                                                <br /><b>Thursday</b> 9am-6pm
                                                <br /><b>Friday</b> 9am-6pm</small></p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-9" style={{ marginTop: '20px' }}>
                                    <div className="row mb-4">
                                        <div className="col-md-6 mb-4 mb-md-0">
                                            <div className="form-outline">
                                                <label className="form-label" style={{ float: 'left' }} htmlFor="form3Example1">First name</label>
                                                <input type="text" id="form3Example1" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-outline">
                                                <label className="form-label" style={{ float: 'left' }} htmlFor="form3Example2">Last name</label>
                                                <input type="text" id="form3Example2" className="form-control" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-outline mb-4">
                                        <label className="form-label" style={{ float: 'left' }} htmlFor="form3Example3">Email</label>
                                        <input type="email" id="form3Example3" className="form-control" required />
                                    </div>
                                    <div className="form-outline mb-4">
                                        <label className="form-label" style={{ float: 'left' }} htmlFor="form3Example4">Subject</label>
                                        <input type="text" id="form3Example4" className="form-control" required />
                                    </div>
                                    <div className="form-outline mb-4">
                                        <label className="form-label" style={{ float: 'left' }} htmlFor="form4Example3">Message</label>
                                        <textarea className="form-control" id="form4Example3" rows="5" required></textarea>
                                    </div>
                                    <div className="text-center text-md-start">
                                        <button className="btn btn-primary" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ChatBot />
        </div>
    );
}

export default Contact;