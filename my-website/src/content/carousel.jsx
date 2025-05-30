import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function ImageCarousel() {
  return (
    <main className="carousel">
      <p>This is the section including Images</p>

      <Carousel interval={3000}>

        {/* First slide */}
        <Carousel.Item>
          <img
            className="d-block mx-auto"
            src="/I1.png"
            alt="Slide 1"
            style={{
              height: '500px',
              width: 'auto',
              objectFit: 'contain'
            }}
          />
        </Carousel.Item>

        {/* Second slide */}
        <Carousel.Item>
          <img
            className="d-block mx-auto"
            src="/I2.png"
            alt="Slide 2"
            style={{
              height: '500px',
              width: 'auto',
              objectFit: 'contain'
            }}
          />
        </Carousel.Item>

        {/* Third slide */}
        <Carousel.Item>
          <img
            className="d-block mx-auto"
            src="/I3.png"
            alt="Slide 3"
            style={{
              height: '500px',
              width: 'auto',
              objectFit: 'contain'
            }}
          />
        </Carousel.Item>

      </Carousel>
    </main>
  );
}

export default ImageCarousel;
