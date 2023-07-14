import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Item({image, title, amount, content, isVisible = true}) {

  return (
    <Card style={{ width: '18rem' , display: isVisible? 'block' : 'none'}}>
      <Card.Img variant="top" src= {image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {content}
          <br />
          {amount}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Item;