import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/image1.png";
import projImg2 from "../assets/img/image2.png";
import projImg3 from "../assets/img/image3.png";
import projImg4 from "../assets/img/image4.png";
import projImg5 from "../assets/img/image5.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "social and public sectors",
      description: "national and county government state agencies and NGOs",
      imgUrl: projImg1,
    },
    {
      title: "professinal and education",
      description: "private colleges and private schools",
      imgUrl: projImg2,
    },
    {
      title: "manufacturing industries",
      description: "we do all kind of manufacturing industries",
      imgUrl: projImg3,
    },
    {
      title: "buildinig and construction",
      description: "property developers,poperty manegements companies and real estate agents",
      imgUrl: projImg4,
    },
    {
      title: "banking ,finance and insuarance",
      description: "comercial banks ,insuarance companies and micro finance institutions",
      imgUrl: projImg5,
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
                  <h2>About us</h2>
                  <p>
                    Micro tax consultants Ltd is a Tax consultancy and
                    administration company based in Nairobi.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Target clients</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Services Details</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section"></Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <h5 className="projecth5">PREPARING TAX DOCUMENTS</h5>
                        <p>Facilitate obtaining of relevant tax documents.</p>
                        <h5 className="projecth5">FILING OF TAX RETURNS</h5>
                        <p>
                          Statutory (NSSF & NHIF), VAT, Turn over tax(TOT),
                          Rental, Installment tax and Income tax.
                        </p>
                        <h5 className="projecth5">TAX CONSULTANCY</h5>
                        <p>
                          Facilitate the acquiring of relevant Tax documents,
                          providing advice and staff training on matters
                          taxation.
                        </p>
                        <h5 className="projecth5">PAYROLL</h5>
                        <p>iling of pay as you earn for employees.</p>
                        <h5 className="projecth5">
                          KEEP TRACK OF FINANCIAL STATEMENTS
                        </h5>
                        <p>
                          Writing all business books of accounts as per sec 147
                          of the companies act.cap.486 laws of kenya and
                          preparation of business management reports.
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
      <img className="background-image-right" src={colorSharp2} alt="background" ></img>
    </section>
  );
};
