import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const CurrentWeather = ({ currentWeather }) => {
  return (
    <Container>
      <Row>
      <Col>
          <h2>{currentWeather.weather[0].main}</h2><h4>({currentWeather.weather[0].description})</h4>
        </Col>
        <Col>
          <h1>New York City</h1>
        </Col>
        </Row>
        <Row>
        <Col>
        <h1>Todays Date</h1>
        </Col>
        <Col>
          <h2>{currentWeather.main.temp}°</h2><h4>{currentWeather.main.temp_min}° / {currentWeather.main.temp_max}°</h4>
        </Col>
      </Row>
    </Container>
  );
};

export default CurrentWeather;
