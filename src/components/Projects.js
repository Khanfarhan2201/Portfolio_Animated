import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Developed using Django",
      imgUrl: projImg1,
    },
    {
      title: "WhatsApp Clone",
      description: "Developed using React",
      imgUrl: projImg2,
    },
    {
      title: "Chat Application",
      description: "Developed using Angular",
      imgUrl: projImg3,
    },
    {
      title: "GYP Registration System",
      description: "Full-stack application for gym registrations",
      imgUrl: projImg1,
    },
    {
      title: "Food Delivery App",
      description: "Developed using React Native",
      imgUrl: projImg2,
    },
    {
      title: "Netflix Clone",
      description: "Developed using Angular",
      imgUrl: projImg3,
    },
    {
      title: "Landing Page",
      description: "Various landing page designs and implementations",
      imgUrl: projImg1,
    },
    {
      title: "News App",
      description: "News Website Using Angular by fetching API's",
      imgUrl: projImg3
    },
    {
      title: "Event Management System",
      description: "Backend project using JDBC for managing events",
      imgUrl: projImg2,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are some of the projects that I have worked on, showcasing my skills in various programming languages and frameworks. Each project has been developed with a focus on clean code, user experience, and responsive design.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
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
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>More projects coming soon! Stay tuned for updates on my latest work and developments.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Thank you for visiting my portfolio. Feel free to contact me for collaborations, queries, or any opportunities.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  )
}
