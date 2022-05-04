import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import banner1 from '../../../images/banner1.jpg'
import banner2 from '../../../images/banner2.jpg'
import banner3 from '../../../images/banner3.jpg'

const Banner = () => {
    return (
 <section id="banner">
            <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100 img-height "
      src={banner2}
      alt="First slide"
    />
    <Carousel.Caption>
 <div className="row">
     <div className="col-lg-12 col-12  banner-heading">
     <h3>REALITY <span className='name-style-2'>IS JUST YOUR</span>
        <span className='name-style'> PERCEPTION</span></h3>
     </div>
 </div>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100 img-height "
      src={banner1}
      alt="Second slide"
    />

    <Carousel.Caption>
    <div className="row">
    <div className="col-lg-12 col-12  banner-heading text">
     <h3>REALITY <span className='name-style-4'>IS JUST</span>
        <span className='name-style-3'> YOUR PERCEPTION</span></h3>
     </div>
   </div>
    
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 img-height "
      src={banner3}
      alt="Third slide"
    />

    <Carousel.Caption>
    <div className="row">
    <div className="col-lg-12 col-12  banner-heading text">
    <h3>MOST POPULAR INVENTORY PLACE</h3>
     </div>
   </div>
    
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </section>
    );
};

export default Banner;