import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Item from './Item';

function SearchBar({ tutors, courses }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourses, setSelectedCourses] = useState(courses);
  const [selectedTutors, setSelectedTutors] = useState(tutors);

  function handleSearch(searchTerm, selectedCourses) {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
  
    const newTutors = tutors.filter(
      (tutor) =>
        tutor.name.toLowerCase().includes(lowerCaseSearchTerm) &&
        selectedCourses.includes(tutor.course)
    );
  
    return newTutors;
  }

  function handleCourseChange(event) {
    const value = event.target.value;
    const isChecked = event.target.checked;

    setSelectedCourses((selectedCourses) => {
      const updatedCourses = isChecked
        ? [...selectedCourses, value]
        : selectedCourses.filter((course) => course !== value);

      const newTutors = handleSearch(searchTerm, updatedCourses);
      setSelectedTutors(newTutors);

      return updatedCourses;
    });
  }

  function handleTermChange(event) {
    const value = event.target.value;
    setSearchTerm(value);
    const newTutors = handleSearch(value, selectedCourses);
    setSelectedTutors(newTutors);
  }

  return (
    <div style={{ overflowX: 'hidden' }}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Search for Items...." value={searchTerm} onChange={handleTermChange} />
        </Form.Group>

        <div className="d-flex align-items-center justify-content-center mb-3">
          <Form.Label className="me-2">Filter By:</Form.Label>
          {courses.map((course) => (
            <Form.Check
              key={course}
              type="checkbox"
              label={course}
              value={course}
              id={course}
              onChange={handleCourseChange}
              checked={selectedCourses.includes(course)}
              className="me-3"
            />
          ))}
        </div>

        <div className="row justify-content-center">
          {selectedTutors.map((tutor) => (
            <div key={tutor.id} className="col-md-3 mb-3">
              <div className="text-center">
                <Item id={tutor.id} image={tutor.image} content={tutor.course} amount={tutor.amount} title={tutor.name} isVisible={true} />
              </div>
            </div>
          ))}
        </div>
      </Form>
    </div>
  );
}

export default SearchBar;
