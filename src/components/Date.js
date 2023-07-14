import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-datepicker/dist/js/bootstrap-datepicker';
import 'bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

function Date() {
  useEffect(() => {
    $('#datepicker').datepicker({
      orientation: 'bottom',
      templates: {
        rightArrow: '<i class="fas fa-chevron-right"></i>',
        leftArrow: '<i class="fas fa-chevron-left"></i>'
      }
    });
  }, []);

  return (
    <Container>
      <form>
        <div className="row form-group">
          <h3 className="center">Select a Date</h3>
          <div className="input-group date" id="datepicker">
            <input type="text" className="form-control" placeholder="MM/DD/YYYY" />
            <span className="input-group-append">
              <span className="input-group-text bg-white d-block">
                <FontAwesomeIcon icon={faCalendarAlt} />
              </span>
            </span>
          </div>
        </div>
      </form>
    </Container>
  );
}

export default Date;
