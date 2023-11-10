import React from "react";
import { Container, Row, Col, Nav, NavLink } from "react-bootstrap";

const MainSpotify = () => {
  return (
    <Container>
      <Row col={12} col-md={6} lg={7}>
        <Col className="d-flex flex-row">
          <Nav className="col-9 col-lg-11 mainLinks d-none d-md-flex ms-5 ps-5">
            <NavLink className="text-secondary ps-5 ms-5">TRENDING</NavLink>
            <NavLink className="text-secondary ms-3">PODCAST</NavLink>
            <NavLink className="text-secondary ms-3">MOODS AND GENRES</NavLink>
            <NavLink className="text-secondary ms-3">NEW RELEASES</NavLink>
            <NavLink className="text-secondary ms-3">DISCOVER</NavLink>
          </Nav>
        </Col>
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
