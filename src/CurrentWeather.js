import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import logo from "./statue-of-liberty-icon.jpg";

const CurrentWeather = ({ currentWeather }) => {
  return (
    <Container>
      <Row>
        <Col md="auto">
          <Image src={logo} className="App-logo" alt="logo" />
        </Col>
        <Col md="auto">
          <h2>{currentWeather.weather[0].main}</h2><h4>({currentWeather.weather[0].description})</h4>
        </Col>
        <Col md="auto">
          <h2>{currentWeather.main.temp}°</h2><h4>{currentWeather.main.temp_min}° / {currentWeather.main.temp_max}°</h4>
        </Col>
      </Row>
    </Container>
  );
};

export default CurrentWeather;
