import React from "react";
import { Container, Row, Col, Nav, NavLink } from "react-bootstrap";

const MainSpotify = () => {
  return (
    <Container>
      <Row col={12} col-md={6} lg={7}>
        <Col className="d-flex flex-row">
          <Nav className="col-9 col-lg-11 mainLinks d-none d-md-flex text-secondary">
            <NavLink href="#">TRENDING</NavLink>
            <NavLink href="#">PODCAST</NavLink>
            <NavLink href="#">MOODS AND GENRES</NavLink>
            <NavLink href="#">NEW RELEASES</NavLink>
            <NavLink href="#">DISCOVER</NavLink>
          </Nav>
        </Col>

        <Row>
          <Col className="col col-10">
            <div id="searchResults" style={{ display: "none" }}>
              <h2>Search Results</h2>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"></div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="col col-10">
            <div id="rock">
              <h4 className="mt-2">Rock Classics</h4>
              <div
                className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                id="rockSection"
              ></div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="col-10">
            <div id="pop">
              <h4>Pop Culture</h4>
              <div
                className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                id="popSection"
              ></div>
            </div>
          </Col>
        </Row>

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
                <Nav className="d-flex">
                  <Nav.Link href="#">
                    <img src="assets/playerbuttons/shuffle.png" alt="shuffle" />
                  </Nav.Link>
                  <Nav.Link href="#">
                    <img src="assets/playerbuttons/prev.png" alt="prev" />
                  </Nav.Link>
                  <Nav.Link href="#">
                    <img src="assets/playerbuttons/play.png" alt="play" />
                  </Nav.Link>
                  <Nav.Link href="#">
                    <img src="assets/playerbuttons/next.png" alt="next" />
                  </Nav.Link>
                  <Nav.Link href="#">
                    <img src="assets/playerbuttons/repeat.png" alt="repeat" />
                  </Nav.Link>
                </Nav>

                <Container className="progress mt-3">
                  <div role="progressbar"></div>
                </Container>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default MainSpotify;
