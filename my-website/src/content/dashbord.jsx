import { useState } from 'react'
import './dashbord.css'
import { HydratedRouter } from 'react-router-dom'
import { Card, CardImg, CardTitle, Col, Container, Row, CardBody, Tabs, Tab } from 'react-bootstrap'
import { useEffect } from 'react' 
import GitHubCalendar from 'react-github-calendar'; // Fixed import name


function Dashbord() {
  const [repoData, setRepoData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/RyderKeeny")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          // Fetch repositories sorted by most recent
          fetch(`${result.repos_url}?sort=updated&direction=desc&per_page=100`)
            .then((repoRes) => repoRes.json())
            .then((repos) => {setRepoData(repos);});
          

            
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);



  return (
    <Container className='dashbord'>
  <Tabs defaultActiveKey={"status"} className="dashboard-tabs">
    <Tab eventKey='status' title='Status'>
      <Card className="dashboard-card">
        <Row className='g-2'>
          <Col>
            <Card className="dashboard-card">
              <CardImg className="dashboard-img" alt='github stats' src='https://github-readme-stats.vercel.app/api?username=RyderKeeny&hide_rank=true' />
              <div className="githubLink">
                <a href='https://github.com/RyderKeeny'>Link to Github</a>
              </div>
            </Card>

            <Card className="dashboard-card">
              <CardBody className="repo-list">
                <CardTitle>Current Repos</CardTitle>
                {repoData ? (
                  repoData.slice(0, 4).map((repo) => (
                    <div className="repo-item" key={repo.id}>
                      <a href={repo.html_url} target='_blank' rel='noopener noreferrer'>
                        <strong>{repo.name}</strong>
                      </a>
                    </div>
                  ))
                ) : (
                  <p>Loading repositories...</p>
                )}
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card className="dashboard-card">
              <CardImg className="dashboard-img" src='https://github-readme-stats.vercel.app/api/top-langs/?username=RyderKeeny&layout=compact' />
            </Card>

            <Card className="dashboard-card">
              <CardBody className="contributions">
                <GitHubCalendar
                  username="RyderKeeny"
                  blockSize={12}
                  blockMargin={4}
                  fontSize={14}
                  theme={{
                    light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353']
                  }}
                  hideColorLegend={false}
                  hideMonthLabels={false}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Card>
    </Tab>

    <Tab eventKey='projects' title='Projects'>
      <Card className="dashboard-card projects-section">
        <p>Future Projects</p>
        <li>Microcontroller Based Smart Irrigation System</li>
        <li>Automated Solar Tracker</li>
        <li>Touch Sensitive MIDI Controller</li>
      </Card>

      <Card className="dashboard-card projects-section">
        <p>Current Projects</p>
        <li>Bluetooth Enabled Drone Toy</li>
        <li>Fast Food Discount Finder</li>
        <li>Retro Style Beat'em Up Fighting Game</li>
      </Card>
    </Tab>
  </Tabs>
</Container>

  )
}


export default Dashbord