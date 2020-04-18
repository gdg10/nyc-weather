import React from "react";
import styled from "styled-components";
import gitIcon from "./gitIcon.png";
import jiraIcon from "./jira_icon_white.png";
import mailIcon from "./mail.svg";
import calendarIcon from "./calendar.png";
import paperIcon from "./white-sheets.svg";

const IconUrlList = [
  calendarIcon,
  gitIcon,
  jiraIcon,
  mailIcon,
  paperIcon,
  jiraIcon
];

const LinkUrlList = [
  "https://calendar.google.com/calendar/r",
  "https://github.quartethealth.com/",
  "https://jira.quartethealth.com/secure/Dashboard.jspa",
  "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox",
  "http://localhost:9000/",
  "https://docs.google.com/spreadsheets/d/1vPdZGCKu5GLY61beVZI13CARDV4-maKZqRvolyxJffk/edit#gid=1268723712"
];

const DocWrapper = styled.div``;

const LinkWrapper = styled.a``;

const Icon = styled.img`
  margin: 20px 30px 10px 0px;
  padding: 4px;
  height: 4em;
  width: 4em;
  float: left;
  transition: 0.35s;
  border: 2px solid transparent;
  border-radius: 5px;
  opacity: 0.9;
  :hover {
    opacity: 1;
    border: 2px solid white;
    background: #232526;
    background: -webkit-linear-gradient(to right, #414345, #232526);
    background: linear-gradient(to right, #414345, #232526);
  }
  :active {
    opacity: 0.3;
  }
`;

const StyledIconConstructor = (linkURL, iconURL, aKey) => {
  return (
    <LinkWrapper href={linkURL} key={"unique-" + aKey}>
      <Icon src={iconURL} />
    </LinkWrapper>
  );
};

const IconDock = () => {
  return (
    <DocWrapper>
      {IconUrlList.map((val, i) => {
        return StyledIconConstructor(LinkUrlList[i], val, i);
      })}
    </DocWrapper>
  );
};

export default IconDock;
