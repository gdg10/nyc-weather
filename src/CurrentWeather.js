import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled, { keyframes } from "styled-components";
import { fadeIn, flipInX } from "react-animations";
import IconDock from "./IconDock";
import GoogleForm from "./GoogleForm";
import Clock from 'react-live-clock';

const fadeAnimation = keyframes`${fadeIn}`;
const bounceAnimation = keyframes`${flipInX}`;
const FadeAnimationWrapper = styled.div`
  animation: 2s ${fadeAnimation};
`;
const BounceAnimationWrapper = styled.div`
  animation: 0.75s ${bounceAnimation};
`;

const ContainerStyle = {
  margin: "0",
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)"
};

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
  font-size: 2em;
  font-weight: normal;
  color: lightgrey;
`;

const today = new Date();

const COPY = {
  GREETING: "Hello, Garrett",
  WEATHER: (temp, condition) => {
    return temp + "° and " + condition.toLowerCase() + " in Midtown";
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
      <FadeAnimationWrapper>
        <Row>
          <Col>
            <SubGreeting2><Clock format={'h:mm A'} ticking={true} timezone={'US/Eastern'} /></SubGreeting2>
            <SubGreeting2><Clock format={'dddd, MMMM Mo'} timezone={'US/Eastern'} /></SubGreeting2>
            <Greeting>{COPY.GREETING}</Greeting>
            <SubGreeting1>
              {COPY.WEATHER(weather.main.temp, weather.weather[0].main)}
            </SubGreeting1>
          </Col>
        </Row>
        {/* <Row>
          <Col xs={5}>
            <GoogleForm />
          </Col>
        </Row> */}
        <Row>
          <Col>
            <BounceAnimationWrapper>
              <IconDock />
            </BounceAnimationWrapper>
          </Col>
        </Row>
      </FadeAnimationWrapper>
    </Container>
  );
};

export default CurrentWeather;
