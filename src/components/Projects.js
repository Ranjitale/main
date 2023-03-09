import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/forth project.jpg";
import projImg2 from "../assets/img/second work.jpg";
import projImg3 from "../assets/img/project1.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      url: "https://create-website-with-ranjit.netlify.app/",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      description: "Weather App",
      imgUrl: projImg2,
    },
    {
      url: "https://ioe-quiz.netlify.app/",
      description: "Quiz",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I show you to all the big and small websites I have done so
                    far
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <p>
                          <ul style={{ listStyleType: "circle" }}>
                            <li>
                              <a
                                href="https://mousam-bhivag.netlify.app/"
                                style={{ textDecoration: "none" }}
                              >
                                Weather App
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://mousam-bhivag.netlify.app/"
                                style={{ textDecoration: "none" }}
                              >
                                Quiz App
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://mousam-bhivag.netlify.app/"
                                style={{ textDecoration: "none" }}
                              >
                                Web Development
                              </a>
                            </li>
                          </ul>
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Thanks for visiting . Don't hesitate to contact me I
                          am always with you.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  );
};
