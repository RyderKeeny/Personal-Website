import { useState } from 'react'
import './dashbord.css'
import { HydratedRouter } from 'react-router-dom'
import { Card, CardImg, CardTitle, Col, Container, Row, ProgressBar, CardBody, Tabs, Tab } from 'react-bootstrap'
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
      <Tabs defaultActiveKey={"status"}>
               
        <Tab eventKey='status' title='Status'>
            <Card>
              <Row className='g-0'>
                <Col>
                  <Card>
                    <CardImg alt='github report' src='https://github-readme-stats.vercel.app/api?username=RyderKeeny&hide_rank=true'></CardImg>
                    <a href='https://github.com/RyderKeeny'>Link to Github</a>
                  </Card>
    
                  <Card>
                    <CardBody>
                      <CardTitle> Current Repo's </CardTitle>
                      {repoData ? (
                        repoData.slice(0,4).map((repo) => (
                          <div key={repo.id} style={{ marginBottom: '1rem' }}>
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
                  <Card>
                    <CardImg src='https://github-readme-stats.vercel.app/api/top-langs/?username=RyderKeeny&layout=compact'></CardImg>
                  </Card>
                  
                  <Card>
                    <CardBody>
                      <CardTitle>My Contributions</CardTitle>
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
                          style={{ margin: '0 auto' }}
                        />
                    </CardBody>
                  </Card>                  
                </Col>
              </Row>
            </Card>
        </Tab>
        
        <Tab eventKey='projects' title='Projects'>
        <Card>
          <p>Future Projects</p>
          <li> Microcontroller Based Smart Irrigation System </li>
          <li> Automated Solar Tracker </li>
          <li> Touch Sensitive MIDI Controller </li>
          {/* ... other list items ... */}
        </Card>

        <Card>
          <p>Current Projects</p>
          <li> Bluetooth Enabled drone toy </li>
          <li> Fast Food Discount Finder </li>
          <li> Retro Style Beat'em up fighting game </li>
          {/* ... other list items ... */}
        </Card>
        </Tab>

        {/* You can add more tabs here if needed */}
      </Tabs>
    </Container>
  )
}


export default Dashbord