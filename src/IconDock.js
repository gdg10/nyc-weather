import React from "react";
import styled from "styled-components";
import gitIcon from "./gitIcon.png";
import jiraIcon from "./jira_icon_white.png";
import gmailIcon from "./gmail_icon_white.png";
import calendarIcon from "./calendar.png";
import paperIcon from "./white-sheets.svg";

const IconUrlList = [calendarIcon, gitIcon, jiraIcon, gmailIcon, paperIcon];
const LinkUrlList = [
  "https://calendar.google.com/calendar/r",
  "https://github.quartethealth.com/",
  "https://jira.quartethealth.com/secure/Dashboard.jspa",
  "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox",
  "http://careteam.quartethealth.local:64832/"
];
const DocWrapper = styled.div``;
const LinkWrapper = styled.a``;
const Icon = styled.img`
  margin: 20px 30px 10px 0px;
  height: 3em;
  width: 3em;
  float: left;
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