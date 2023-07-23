import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

function Item({ image, title, amount, content, isVisible = true }) {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  // Sample content for where the thrifted items come from and their environmental impact
  const thriftedItemsInfo = {
    location: 'Various locations',
    environmentalImpact: 'Thrifted items are environmentally friendly as they reduce textile waste and promote sustainable fashion. By giving pre-loved clothing a new life, we help minimize the environmental impact of the fashion industry.',
  };

  return (
    <>
      <Card style={{ width: '18rem', display: isVisible ? 'block' : 'none' }} onClick={handleShow}>
        <Card.Img variant="top" src={image} style={{ height: '200px', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {content}
            <br />
            {amount}
          </Card.Text>
        </Card.Body>
      </Card>

      {/* Modal Popup */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={image} alt={title} style={{ width: '100%' }} />
          <p>{content}</p>
          <p>{amount}</p>

          {/* Information about thrifted items */}
          <h5>Where do the thrifted items come from?</h5>
          <p>{thriftedItemsInfo.location}</p>

          <h5>How are thrifted items environmentally friendly?</h5>
          <p>{thriftedItemsInfo.environmentalImpact}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Item;
