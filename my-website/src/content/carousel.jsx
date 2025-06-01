import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardImg, CardTitle, Col, Container, Row, ProgressBar, CardBody, Tabs, Tab, CarouselItem } from 'react-bootstrap'


function ImageCarousel() {
  return (
    <Tabs defaultActiveKey={"purrPlay"}>
      <Tab className="carousel" eventKey='purrPlay' title='PurrPlay'>
        <Carousel interval={3000}>

          {/* First slide */}
          <Carousel.Item>
            <img
              className="d-block mx-auto"
              src="/PurrPlay_1.png"
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
              src="/PurrPlay_2.png"
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
              src="/PurrPlay_3.png"
              alt="Slide 3"
              style={{
                height: '500px',
                width: 'auto',
                objectFit: 'contain'
              }}
            />
          </Carousel.Item>
        </Carousel>
      </Tab>

      <Tab eventKey='Fluencia' title='Fluencia' >
        <Carousel>
          <Carousel.Item>
            <img src='/Fluencia_1.png' 
            className="d-block mx-auto"
            style={{
                height: '500px',
                width: 'auto',
                objectFit: 'contain'
              }}/>
          </Carousel.Item>
          <Carousel.Item>
          <img src='/Fluencia_2.png' 
            className="d-block mx-auto"
            style={{
                height: '500px',
                width: 'auto',
                objectFit: 'contain'
              }}/>
          </Carousel.Item>
          <Carousel.Item>
          <img src='/Fluencia_3.png' 
            className="d-block mx-auto"
            style={{
                height: '500px',
                width: 'auto',
                objectFit: 'contain'
              }}/>
          </Carousel.Item>
        </Carousel>
      </Tab>
      
      <Tab eventKey='CultureConnect' title='CultureConnect' >
        <Carousel>
          <Carousel.Item>
          <img src='/CultureConnect_1.png' 
            className="d-block mx-auto"
            style={{
                height: '500px',
                width: 'auto',
                objectFit: 'contain'
              }}/>
          </Carousel.Item>
          <Carousel.Item>
          <img src='/CultureConnect_2.png' 
            className="d-block mx-auto"
            style={{
                height: '500px',
                width: 'auto',
                objectFit: 'contain'
              }}/>
          </Carousel.Item>
          <Carousel.Item>
          <img src='/CultureConnect_3.png' 
            className="d-block mx-auto"
            style={{
                height: '500px',
                width: 'auto',
                objectFit: 'contain'
              }}/>
          </Carousel.Item>
        </Carousel>
      </Tab>
      
      <Tab eventKey='BallerzOnly' title='BallerzOnly' >
        <Carousel>
          <Carousel.Item>
          <img src='/Ballerz_1.png' 
            className="d-block mx-auto"
            style={{
                height: '500px',
                width: 'auto',
                objectFit: 'contain'
              }}/>
          </Carousel.Item>
          <Carousel.Item>
          <img src='/Ballerz_2.png'
            className="d-block mx-auto"
            style={{
                height: '500px',
                width: 'auto',
                objectFit: 'contain'
              }}/>
          </Carousel.Item>
          <Carousel.Item>
          <img src='/Ballerz_3.png' 
            className="d-block mx-auto"
            style={{
                height: '500px',
                width: 'auto',
                objectFit: 'contain'
              }}/>
          </Carousel.Item>
        </Carousel>
      </Tab>

      <Tab eventKey='Bytes Of Love' title='BOL' >
        <Carousel>
          <Carousel.Item>
          <img src='/BOL_menu.gif' 
            className="d-block mx-auto"
            style={{
                height: '500px',
                width: 'auto',
                objectFit: 'contain'
              }}/>
          </Carousel.Item>
          <Carousel.Item>
          <img src='/BOL_2.png' 
            className="d-block mx-auto"
            style={{
                height: '500px',
                width: 'auto',
                objectFit: 'contain'
              }}/>
          </Carousel.Item>
          <Carousel.Item>
          <img src='/BOL_3.png' 
            className="d-block mx-auto"
            style={{
                height: '500px',
                width: 'auto',
                objectFit: 'contain'
              }}/>
          </Carousel.Item>
        </Carousel>
      </Tab>
    </Tabs>
  );
}

export default ImageCarousel;
