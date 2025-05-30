import { useState } from 'react'
import './dashbord.css'
import { HydratedRouter } from 'react-router-dom'
import { Card, CardImg, CardTitle, Col, Container, Row, CardBody} from 'react-bootstrap'
import { useEffect } from 'react' 



function Dashbord() {
  const [avatarURL, setAvatarURL] = useState();
  const [githubUsername, setGitHubUsername] = useState();
  const [repoData, setRepoData] = useState();
  const [repoLanguage, setRepoLanguage] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/RyderKeeny")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setAvatarURL(result.avatar_url);
          setGitHubUsername(result.login);

          // Fetch repositories sorted by most recent
          fetch(`${result.repos_url}?sort=updated&direction=desc`)
            .then((repoRes) => repoRes.json())
            .then((repos) => {
              setRepoData(repos);

              // Extract languages for graphing
              const languages = {};
              repos.forEach(repo => {
                if (repo.language) {
                  languages[repo.language] = (languages[repo.language] || 0) + 1;
                }
              });
              setRepoLanguage(Object.entries(languages).map(([name, count]) => ({ name, count })));
            });
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);



  return (
    <Container className='dashbord'>
      <Card className='card-outer'>
        <Row className='overflow-hidden'> {/* Main row that will contain both columns */}
          {/* First column with sections 1 and 2 */}
          <Col md={6}>
              <Card>
                <p>this section is 1</p>
                <CardTitle> {githubUsername} </CardTitle>
                

              </Card>
            
              <Card>
                <p>this section is 2</p>
              </Card>
          </Col>
          
          {/* Second column with section 3 */}
          <Col md={6}>
            <Card style={{height: '100%' }}>
              <p>this section is 3</p>
              <CardBody> {repoLanguage.map(lang => `${lang.name} (${lang.count})`).join(', ')} </CardBody>
            </Card>
          </Col>
        </Row>
        
        {/* Section 4 (full width below) */}
        <Row>
          <Col>
            <Card>
              <p>this section is 4</p>
              <CardBody> </CardBody>
            </Card>
          </Col>
        </Row>
      </Card>
    </Container>
  )
}

export default Dashbord