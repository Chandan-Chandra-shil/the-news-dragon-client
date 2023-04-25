import React from "react";
import Header from "../shared/Hedear/Header";
import Footer from "../shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "../shared/leftNav/LeftNav";
import RightNav from "../shared/RightNav/RightNav";
import { Outlet } from "react-router-dom";

const NewsLayout = () => {
  return (
    <div>
      <Header></Header>

      <Container>
        <Row>
          <Col lg={9}>
            <Outlet></Outlet>
          </Col>
          <Col lg={3}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>

      <Footer></Footer>
    </div>
  );
};

export default NewsLayout;
