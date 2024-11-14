import React from 'react';
import './ProductCard.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProductCard = () => {
  return (
    <div className='flex justify-center'>
    <div className='Card' md={4}>
   <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="public\Frame1.png" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    
    <div className='Card' md={4}>
   <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="public\Frame1.png" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    <div className='Card' md={4}>
    <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src="public\Frame1.png" />
       <Card.Body>
         <Card.Title>Card Title</Card.Title>
         <Card.Text>
           Some quick example text to build on the card title and make up the
           bulk of the card's content.
         </Card.Text>
         <Button variant="primary">Go somewhere</Button>
       </Card.Body>
     </Card>
     </div>
     <div className='Card' md={4}>
     <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="public\Frame1.png" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      </div>
    </div>
    
    
  );
}

export default ProductCard;
