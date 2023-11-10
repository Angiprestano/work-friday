import React from "react";
import { Container, Row, Col, Nav, NavLink } from "react-bootstrap";

const MainSpotify = () => {
  return (
    <Container>
      <Row col={12} col-md={6} lg={7}>
        <Col className="d-flex flex-row">
          <Nav className="col-9 col-lg-11 mainLinks d-none d-md-flex">
            <NavLink className="text-secondary">TRENDING</NavLink>
            <NavLink className="text-secondary">PODCAST</NavLink>
            <NavLink className="text-secondary">MOODS AND GENRES</NavLink>
            <NavLink className="text-secondary">NEW RELEASES</NavLink>
            <NavLink className="text-secondary">DISCOVER</NavLink>
          </Nav>
        </Col>

        <Row>
          <Col className="col col-10 ">
            <div id="hiphop">
              <h4>Queen</h4>
              <div
                className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                id="hipHopSection"
              ></div>
            </div>
          </Col>
        </Row>
      </Row>

      <Container className="container-fluid fixed-bottom bg-container pt-1">
        <Row className="h-100">
          <Col className="col-lg-10 col-lg-2">
            <div className="row h-100 flex-column justify-content-center align-items-center">
              <div className="col-6 col-md-4 playerControls">
                <Nav className="d-flex"></Nav>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default MainSpotify;
