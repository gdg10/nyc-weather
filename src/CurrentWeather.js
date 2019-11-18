import React from "react";
//import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

const CurrentWeather = ({ currentWeather }) => {
  return (
    <Container>
      <Row>
        <Col>{currentWeather.weather[0].main}</Col>
        <Col>{currentWeather.main.temp}°</Col>
      </Row>
      <Row>
        <Col>foo</Col>
        <Col>{currentWeather.main.temp_max}° / {currentWeather.main.temp_min}°</Col>
      </Row>
    </Container>
  );
};

export default CurrentWeather;
