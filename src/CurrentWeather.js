import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const fadeAnimation = keyframes`${fadeIn}`;

const ContainerStyle = {
  margin: "0",
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)"
};

const AnimationWrapper = styled.div`
  animation: 2s ${fadeAnimation};
`;

const Greeting = styled.h1`
  text-align: left;
  font-size: 7em;
  font-weight: bold;
`;

const SubGreeting1 = styled.h2`
  text-align: left;
  font-size: 3em;
  font-weight: normal;
  color: lightgrey;
`;

const SubGreeting2 = styled.h2`
  text-align: left;
  font-size: 3em;
  font-weight: 100;
  color: lightgrey;
`;

const today = new Date();

const COPY = {
  GREETING: "Hello, Garrett",
  WEATHER: (temp, condition) => {
    return temp + "° and " + condition.toLowerCase() + " in New York City";
  },
  DATE: today => {
    return (
      today.getMonth() + 1 + "." + today.getDate() + "." + today.getFullYear()
    );
  }
};

const CurrentWeather = ({ weather }) => {
  return (
    <Container style={ContainerStyle}>
      <Row>
        <Col>
          <AnimationWrapper>
            <Greeting>{COPY.GREETING}</Greeting>
            <SubGreeting1>
              {COPY.WEATHER(weather.main.temp, weather.weather[0].main)}
            </SubGreeting1>
            <SubGreeting2>{COPY.DATE(today)}</SubGreeting2>
          </AnimationWrapper>
        </Col>
      </Row>
    </Container>
  );
};

export default CurrentWeather;
