import React from 'react';
import Container from 'react-bootstrap/Container';

function Times() {
  return (
    <Container>
      <div class="column">
            <h3 class="center">Select a Time</h3>

            <div class="row g-2">
                <div class="col-6">
                    <input type="radio" class="btn-check" name="options" id="btn-check-outlined1" autocomplete="off" />
                    <label class="btn btn-outline-primary" for="btn-check-outlined1"
                        style={{height: '60%', width: '60%', display: 'block'}}>9:00AM</label><br />
                </div>
                <div class="col-6">
                    <input type="radio" class="btn-check" name="options" id="btn-check-outlined2" autocomplete="off" />
                    <label class="btn btn-outline-primary" for="btn-check-outlined2"
                        style={{height: '60%', width: '60%', display: 'block'}}>10:00AM</label><br />
                </div>
                <div class="col-6">
                    <input type="radio" class="btn-check" name="options" id="btn-check-outlined3" autocomplete="off" />
                    <label class="btn btn-outline-primary" for="btn-check-outlined3"
                        style={{height: '60%', width: '60%', display: 'block'}}>11:00AM</label><br />
                </div>
                <div class="col-6">
                    <input type="radio" class="btn-check" name="options" id="btn-check-outlined4" autocomplete="off" />
                    <label class="btn btn-outline-primary" for="btn-check-outlined4"
                        style={{height: '60%', width: '60%', display: 'block'}}>12:00PM</label><br />
                </div>
                <div class="col-6">
                    <input type="radio" class="btn-check" name="options" id="btn-check-outlined5" autocomplete="off" />
                    <label class="btn btn-outline-primary" for="btn-check-outlined5"
                        style={{height: '60%', width: '60%', display: 'block'}}>1:00PM</label><br />
                </div>
                <div class="col-6">
                    <input type="radio" class="btn-check" name="options" id="btn-check-outlined6" autocomplete="off" />
                    <label class="btn btn-outline-primary" for="btn-check-outlined6"
                        style={{height: '60%', width: '60%', display: 'block'}}>2:00PM</label><br />
                </div>
                <div class="col-6">
                    <input type="radio" class="btn-check" name="options" id="btn-check-outlined7" autocomplete="off" />
                    <label class="btn btn-outline-primary" for="btn-check-outlined7"
                        style={{height: '60%', width: '60%', display: 'block'}}>3:00PM</label><br />
                </div>
                <div class="col-6">
                    <input type="radio" class="btn-check" name="options" id="btn-check-outlined8" autocomplete="off" />
                    <label class="btn btn-outline-primary" for="btn-check-outlined8"
                        style={{height: '60%', width: '60%', display: 'block'}}>4:00PM</label><br />
                </div>
                <div class="col-6">
                    <input type="radio" class="btn-check" name="options" id="btn-check-outlined9" autocomplete="off" />
                    <label class="btn btn-outline-primary" for="btn-check-outlined9"
                        style={{height: '60%', width: '60%', display: 'block'}}>5:00PM</label><br />
                </div>
                <div class="col-6">
                    <input type="radio" class="btn-check" name="options" id="btn-check-outlined10" autocomplete="off" />
                    <label class="btn btn-outline-primary" for="btn-check-outlined10"
                        style={{height: '60%', width: '60%', display: 'block'}}>6:00PM</label><br />
                </div>
            </div>
        </div>
    </Container>
  );
}

export default Times;