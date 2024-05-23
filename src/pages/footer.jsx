import React from "react";
import "./Global.css";
import Logo from "../images/Logo.png";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <>
      <div className="footer-main">
        <div className="footer-section">
          <Container>
            <Row>
              <Col xs={4}>
                <img src={Logo} alt="logo" />
                <p className="about">
                  Vestibulum sagittis, nisl nec pellentesque suscipit, arcu nisi
                  maximus neque, vitae finibus erat odio eu lacus. Curabitur
                  malesuada erat eros, quis dignissim dui accumsan id. Cras non
                  imperdiet metus. Sed nec turpis nec.
                </p>
              </Col>
              <Col xs={8}>
                <Row className="my-5">
                  <Col className="sign">Sign up for our Newsletter !</Col>
                  <Col>
                    <input
                      className="email-text"
                      type="text"
                      disabled
                      placeholder="hello@psdfreebies.com"
                    />
                    <Button style={{ marginBottom: "6px" }} className="button">
                      Submit
                    </Button>
                  </Col>
                </Row>
                <Row className="horizontal-line-grey my-3"></Row>
                <Row className="my-5">
                  <Col xs={3}>
                    <p className="footer-header">Information</p>
                    <div className="footer-pointers">
                      <span className="pr-6 mt-1">
                        <FontAwesomeIcon icon="fa fa-caret-right" />
                      </span>
                      Careers
                    </div>
                    <div className="footer-pointers">
                      <span className="pr-6 mt-1">
                        <FontAwesomeIcon icon="fa fa-caret-right" />
                      </span>
                      Investor Relations
                    </div>
                    <div className="footer-pointers">
                      <span className="pr-6 mt-1">
                        <FontAwesomeIcon icon="fa fa-caret-right" />
                      </span>
                      Press Releases
                    </div>
                    <div className="footer-pointers">
                      <span className="pr-6 mt-1">
                        <FontAwesomeIcon icon="fa fa-caret-right" />
                      </span>
                      Shop with Points
                    </div>
                  </Col>
                  <Col xs={3}>
                    <p className="footer-header">Customer Care</p>
                    <div className="footer-pointers">
                      <span className="pr-6 mt-1">
                        <FontAwesomeIcon icon="fa fa-caret-right" />
                      </span>
                      Returns
                    </div>
                    <div className="footer-pointers">
                      <span className="pr-6 mt-1">
                        <FontAwesomeIcon icon="fa fa-caret-right" />
                      </span>
                      Shipping Info
                    </div>
                    <div className="footer-pointers">
                      <span className="pr-6 mt-1">
                        <FontAwesomeIcon icon="fa fa-caret-right" />
                      </span>
                      Gift Cards
                    </div>
                    <div className="footer-pointers">
                      <span className="pr-6 mt-1">
                        <FontAwesomeIcon icon="fa fa-caret-right" />
                      </span>
                      Size Guide
                    </div>
                  </Col>
                  <Col xs={6}>
                    <p className="footer-header">Store Information</p>
                    <div className="footer-pointers">
                      <span className="pr-15 mt-1">
                        <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                      </span>
                      address: Lorem ipsum dolor sit amet, Onsectetuer
                      adipiscing elit.
                    </div>
                    <div className="footer-pointers">
                      <span className="pr-15 mt-1">
                        <FontAwesomeIcon icon="fa-solid fa-envelope" />
                      </span>
                      email: demo@posthemes.com
                    </div>
                    <div className="footer-pointers">
                      <span className="pr-15 mt-1">
                        <FontAwesomeIcon icon="fa-solid fa-phone" />
                      </span>
                      phone: 0987.654.321
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>

          <div className="horizontal-line-grey"></div>
          <div className="footer-copywrite">
            © 2015 Psdfreebies. All Rights Reserved
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
