import { Card, Col, Row, Button, Container } from 'react-bootstrap';
import './about.css';

function About() {
  return (
    <main>
      <Container className='about'>
        <h1 className="text-center">Ryder Keeny</h1>

        <section>
          <h2>Education</h2>
          <hr />
          <Row>
            <Col md={9} className="degrees">
              <p>Associates of Science – Santa Fe Community College</p>
              <p>Bachelor of Science - University of Florida</p>
            </Col>
            <Col md={3} className="dates">
              <p>Spring 2021</p>
              <p>Fall 2025</p>
            </Col>
          </Row>
        </section>

        <section>
          <h4>Student Organization Roles</h4>
          <h5>Open Source Club – Technical Lead</h5>
          <p className="roles">
            Developing innovative and engaging open-source programming projects alongside peers to strengthen
            collaboration and academic knowledge.
          </p>
          <p className="roles">
            Utilized Agile methodology to manage tasks and support team development, using regular updates and
            meetings to guide progress.
          </p>
        </section>

        <section>
          <h2>Work History</h2>
          <hr />
          <Row className="justify-content-center">
            <Col md={5}>
              <Card className="job-card">
                <Card.Body>
                  <Card.Title className="job-title">
                    Florida Blue – Application Development Intern
                  </Card.Title>
                  <Card.Text className="job-dates">Summer 2024</Card.Text>
                  <Card.Text className="job-dates">Summer 2025</Card.Text>
                  <Card.Img className="work_img" src="FB.png" />
                </Card.Body>
              </Card>
            </Col>
            <Col md={5}>
              <Card className="job-card">
                <Card.Body>
                  <Card.Title className="job-title">Coming Soon...</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>

        <section>
          <h2>Documents</h2>
          <div className="linkbutton">
            <Button variant="outline-success">
              <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </Button>
          </div>
        </section>
      </Container>
    </main>
  );
}

export default About;
