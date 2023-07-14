import React, { useState, useEffect } from 'react';

function BookingDetails() {
  const [bookingNumber, setBookingNumber] = useState(null);

  useEffect(() => {
    const randomNum = Math.floor(Math.random() * 100000) + 100;
    setBookingNumber(randomNum);
  }, []);

  return (
    <div className="details">
      <div className="row" style={{ padding: '3%' }}>
        <div className="col-6">
          <h3>Booking Details</h3>
          <p>
            <br />
            <b>Booking Number:</b>{" "}
            <span id="num">{bookingNumber}</span>
            <br />
            <b>Service(s):</b> Restore
            <br />
            <b>Specialist:</b> Any
            <br />
            <b>Date:</b> June 11, 2023
            <br />
            <b>Time:</b> 10:00AM
          </p>

        </div>

        <div className="col-6">
          <h3>Address</h3>
          <div className="row" style={{ height: '200px' }}>
            <div className="col-lg-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.3523471638596!2d-75.68932491411351!3d45.42239819648794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0507c6d4942b%3A0x822f56e12a53717!2suOttawa!5e0!3m2!1sen!2sca!4v1686517171656!5m2!1sen!2sca"
                className="h-100 w-100" style={{ border: 0 }} allowFullScreen="" loading="lazy"
              ></iframe>
            </div>

            <div className="col-lg-4">
              <ul className="list-unstyled">
                <li>
                  <i className="bi-geo-alt-fill"></i>
                  <p><small>90 University Private<br />Ottawa, ON<br />K1N 6N5</small></p>
                </li>
                <li>
                  <i className="bi-telephone-fill"></i>
                  <p><small><br />(613) 613-6133</small></p>
                </li>
                <li>
                  <i className="bi-envelope-fill"></i>
                  <p><small>contact@bibliotech.com</small></p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingDetails;
