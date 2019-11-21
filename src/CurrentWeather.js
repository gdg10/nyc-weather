import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const today = new Date();
const currentDate =
  today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();

const CurrentWeather = ({ currentWeather }) => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h5>{currentWeather.weather[0].main}</h5>
          <h1>{currentWeather.main.temp}°</h1>
          <h3>New York City</h3>
          <h5>{currentDate}</h5>
        </Col>
      </Row>
    </Container>
  );
};

export default CurrentWeather;
