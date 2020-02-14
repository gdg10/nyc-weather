import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled, { keyframes } from "styled-components";
import { fadeIn, flipInX } from "react-animations";
import IconDock from "./IconDock";
// import GoogleForm from "./GoogleForm";
import Clock from "react-live-clock";

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
            <SubGreeting2>
              <Clock format={"h:mm A"} ticking={true} timezone={"US/Eastern"} />
            </SubGreeting2>
            <SubGreeting2>
              <Clock format={"dddd, MMMM Mo"} timezone={"US/Eastern"} />
            </SubGreeting2>
            <Greeting>{COPY.GREETING}</Greeting>
            <SubGreeting1>
              {COPY.WEATHER(
                Math.floor(weather.main.temp),
                weather.weather[0].main
              )}
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
        <Row>
          <Col>
            <iframe
              title="calendar"
              src="https://calendar.google.com/calendar/embed?height=200&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=Z2dydWJlQHF1YXJ0ZXRoZWFsdGguY29t&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23039BE5&amp;color=%2333B679&amp;color=%230B8043&amp;showTz=0&amp;showCalendars=0&amp;mode=AGENDA&amp;showNav=0&amp;showDate=0&amp;showTitle=0&amp;showPrint=0&amp;showTabs=0"
              style={{float: 'left', marginTop: '2em', opacity: '.85', borderRadius: '3px'}}
              width="355"
              height="200"
              frameborder="0"
              scrolling="no"
            ></iframe>
          </Col>
        </Row>
      </FadeAnimationWrapper>
    </Container>
  );
};

export default CurrentWeather;
