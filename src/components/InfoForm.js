import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-datepicker/dist/js/bootstrap-datepicker';
import 'bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css';

function InfoForm() {
  useEffect(() => {
    $('#datepicker').datepicker({
      orientation: 'bottom',
    });
  }, []);

  return (
    <Container>
      <form style={{ padding: '1%' }}>
        <div className="row mb-4">
          <div className="col-md-6">
            <div className="form-outline">
              <label className="form-label" style={{ float: 'left' }} htmlFor="form3Example1">First name</label>
              <input type="text" id="form3Example1" className="form-control" placeholder="John" required />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-outline">
              <label className="form-label" style={{ float: 'left' }} htmlFor="form3Example2">Last name</label>
              <input type="text" id="form3Example2" className="form-control" placeholder="Doe" required />
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-outline" style={{ marginBottom: '1%' }}>
              <label className="form-label" style={{ float: 'left' }} htmlFor="inputProv">Province</label>
              <select id="inputProv" className="form-control" required>
                <option defaultValue>Choose...</option>
                <option>Alberta</option>
                <option>British Columbia</option>
                <option>Manitoba</option>
                <option>New Brunswick</option>
                <option>Newfoundland and Labrador</option>
                <option>Northwest Territories</option>
                <option>Nova Scotia</option>
                <option>Nunavut</option>
                <option>Ontario</option>
                <option>Prince Edward Island</option>
                <option>Quebec</option>
                <option>Saskatchewan</option>
                <option>Yukon</option>
              </select>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-outline" style={{ marginBottom: '1%' }}>
              <label className="form-label" style={{ float: 'left' }} htmlFor="form3Example3">Phone Number</label>
              <input type="tel" id="form3Example3" className="form-control" placeholder="(000) 000-0000" required />
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-outline mb-4">
              <label className="form-label" style={{ float: 'left' }} htmlFor="form3Example4">Email</label>
              <input type="email" id="form3Example4" className="form-control" placeholder="contact@bibliotech.com" required />
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-outline mb-4">
              <label className="form-label" style={{ float: 'left' }} htmlFor="form4Example3">Additional Notes (Optional)</label>
              <textarea className="form-control" id="form4Example3" rows="1"></textarea>
            </div>
          </div>
        </div>

        <div className="text-center text-md-start col d-flex justify-content-center">
          <Link to="/confirm" className="btn btn-primary" role="button" type="submit" style={{ width: '60%' }}>
            <b>Continue</b>
          </Link>
        </div>
      </form>
    </Container>
  );
}

export default InfoForm;
