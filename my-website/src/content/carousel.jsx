import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tabs, Tab, Container } from 'react-bootstrap';
import './carousel.css'; // <-- Make sure to import the custom CSS

function ImageCarousel() {
  return (
    <Container>
    <Tabs defaultActiveKey={"purrPlay"} className="carousel-tabs">
      <Tab className="carousel-tab" eventKey='purrPlay' title='PurrPlay'>
        <Carousel interval={4000}>
          <Carousel.Item>
            <img className="carousel-wrapper" src="/PurrPlay_1.png" alt="Slide 1" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-wrapper" src="/PurrPlay_2.png" alt="Slide 2" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-wrapper" src="/PurrPlay_3.png" alt="Slide 3" />
          </Carousel.Item>
        </Carousel>
      </Tab>

      <Tab className="carousel-tab" eventKey='Fluencia' title='Fluencia'>
        <Carousel>
          <Carousel.Item>
            <img className="carousel-wrapper" src="/Fluencia_3.png" alt="Slide 1" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-wrapper" src="/Fluencia_2.png" alt="Slide 2" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-wrapper" src="/Fluencia_1.png" alt="Slide 3" />
          </Carousel.Item>
        </Carousel>
      </Tab>

      <Tab className="carousel-tab" eventKey='CultureConnect' title='CultureConnect'>
        <Carousel>
          <Carousel.Item>
            <img className="carousel-wrapper" src="/CultureConnect_2.png" alt="Slide 1" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-wrapper" src="/CultureConnect_1.png" alt="Slide 2" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-wrapper" src="/CultureConnect_3.png" alt="Slide 3" />
          </Carousel.Item>
        </Carousel>
      </Tab>

      <Tab className="carousel-tab" eventKey='BallerzOnly' title='BallerzOnly'>
        <Carousel>
          <Carousel.Item>
            <img className="carousel-wrapper" src="/Ballerz_1.png" alt="Slide 1" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-wrapper" src="/Ballerz_2.png" alt="Slide 2" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-wrapper" src="/Ballerz_3.png" alt="Slide 3" />
          </Carousel.Item>
        </Carousel>
      </Tab>

      <Tab className="carousel-tab" eventKey='Bytes Of Love' title='BOL'>
        <Carousel>
          <Carousel.Item>
            <img className="carousel-wrapper" src="/BOL_menu.gif" alt="Slide 1" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-wrapper" src="/BOL_2.png" alt="Slide 2" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-wrapper" src="/BOL_3.png" alt="Slide 3" />
          </Carousel.Item>
        </Carousel>
      </Tab>
    </Tabs>
    </Container>
  );
}

export default ImageCarousel;
