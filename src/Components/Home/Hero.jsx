import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Hero.css'
import ProductCard from '../ProductCard/ProductCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Cajon } from '../Cajon/Cajon';
import Artist from '../Artist/Artist';


const Hero = () => {
  return (
    <>
     <Carousel className="custom-carousel">
  <Carousel.Item interval={200}>
    <img 
      className="d-block w-100" 
      src="public\Carousel.png" 
      alt="1" 
    />
    
  </Carousel.Item>
  <Carousel.Item interval={200}>
    <img 
      className="d-block w-100" 
      src="public\Carousel2.png" 
      alt="2" 
    />
    
  </Carousel.Item>
  <Carousel.Item interval={200}>
    <img 
      className="d-block w-100" 
      src="public\Carousel1.png" 
      alt="3" 
    />
  </Carousel.Item>
</Carousel>

<div className="best-selling-banner">
      <h1 className="banner-text">Best Selling Products</h1>
    </div>

<ProductCard/>
<div className="categories-banner">
      <h1 className="banner-text">Categories</h1>
    </div>



<div className='categories'>
<Row>
<Col xs={6} md={4} >
  <Image className='categories-hover' src="public\Categories1.png" rounded />
</Col>

<Col xs={6} md={4}>
  <Image className='categories-hover' src="public\Categories2.png" rounded />
</Col>
<Col xs={6} md={4}>
  <Image className='categories-hover' src="public\Categories3.png" rounded />
</Col>
</Row>
</div>


<div className="categories-banner">
      <h1 className="banner-text">Get the right Cajon</h1>
    </div>


<div className='cajon'>
<Cajon/>
</div>


<div className="categories-banner">
      <h1 className="banner-text">About Us</h1>
    </div>


<div>
  <Artist/>
</div>
    </>



  )
}

export default Hero
