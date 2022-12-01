import { Container, Row, Col } from "react-bootstrap";
import mtc from "../assets/img/mtc.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={mtc} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://wa.me/message/OPKFD5HACT6OK1"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://m.facebook.com/story.php?story_fbid=620365446254648&substory_index=620365446254648&id=100086412576076&sfnsn=mo&mibextid=RUbZ1f"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/microtaxconsultant?r=nametag"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
