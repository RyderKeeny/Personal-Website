
import { Card, CardImg, CardTitle, Col, Container, Row, ProgressBar, CardBody, Tabs, Tab } from 'react-bootstrap'
import { HydratedRouter } from 'react-router-dom'
import './about.css'


function About() {

  return (
    <main className='about'>
      
    <h1> Ryder Keeny </h1>
    <hr/>
        
    <h2> Education </h2>
    <Row>
      <Col>
        <p> Associates of science Santa Fe college	 </p>
        <p>Bachelors of Science In Computer Engineering</p>
      </Col>
      <Col>
        <p> spring 2021 </p>
        <p>  Fall 2025 </p>
      </Col>
    </Row>  
    <h2> Leadership Roles </h2>
      <h4>Open Source Club - Technical Lead</h4>
      <p>Developing innovative and engaging open sourced programming projects alongside peers to help develop a stronger sense of cooperation and academic knowledge.</p>
      <p>Utilized Agile to assist group members with project development by tracking issues and designating tasks list based on importance through constant updating amongst members during constant meetings.</p>
    <h2> Work History </h2>
      <Card>
      <p> Florida Blue - Application Development Internship </p>
      <p>Summer 2024 - 2025</p>
      </Card>
      

    <h2> Interests Hobbies </h2>
      <ul> Movies </ul> 
      <ul> Game Creation </ul>
      <ul> Cooking </ul>
      <ul> Crocheting </ul>
      <ul> Robotics </ul>
      
    <h2> Documents </h2>
      <a href='/Resume.pdf' target="_blank"> Resume </a>

    </main>
  )
}

export default About