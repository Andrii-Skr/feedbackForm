import React from "react";
import styled from "styled-components";

const StyledFooter = styled.span`
  height: 200px;
  background-color: #fafafa;
  border: 1px solid #d8d8d8;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledLeft = styled.span`
  display: flex;
  align-items: center;
  position: relative;
  bottom: 14px;
`;

const StyledRigth = styled.span`
  display: flex;
  align-items: center;
`;

const StyledGreenCartoon = styled.img`
  position: relative;
  bottom: 48px;
`;

const StyledYellowCartoon = styled.img`
  position: relative;
  top: 10px;
  left: 40px;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledLeft>
        <span>
          <img src="src/assets/red_cartoon 6.png" alt="" />
        </span>
        <span>
          <img src="src/assets/Group 5041.png" alt="" />
        </span>
      </StyledLeft>
      <StyledRigth>
        <span>
          <StyledGreenCartoon src="src/assets/Group 80.png" alt="" />
        </span>
        <span>
          <StyledYellowCartoon src="src/assets/red_cartoon 4.png" alt="" />
        </span>
      </StyledRigth>
    </StyledFooter>
  );
};

export default Footer;
