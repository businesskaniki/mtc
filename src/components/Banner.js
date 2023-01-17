import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              <div>
                <span className="tagline">MTC mission</span>
                <h1>Accuracy redifined</h1>
                <p>
                  At MTC, we are driven to help our clients bloom by offering
                  the most competitive services. Working with the best we
                  provide our services in accordance with the written laws and
                  the specified provisions of the written laws,on matters
                  relating to the administration of tax.
                </p>
                <button onClick={() => console.log("connect")}>
                  Let’s Connect <ArrowRightCircle size={25} />
                </button>
              </div>
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">MTC vision</span>
                  <h1>Enhance  Growth</h1>
                  <p>
                    To enhance the growth of our clients, by providing quality
                    services at market leading value, whilst ensuring that
                    customer satisfaction is at the heart of everything we do.
                  </p>
                  <button onClick={() => console.log("connect")}>
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
