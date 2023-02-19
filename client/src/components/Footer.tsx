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
`;
const StyledRedCartoon = styled.img`
  position: absolute;
  bottom: -10px;
  left: 1vw;

  @media (max-width: 750px) {
    height: 15vh;
  }
  @media (max-width: 400px) {
    height: 10vh;
  }
  @media (max-height: 800px) {
    height: 15vh;
  }
  @media (max-width: 350px) {
    height: 10vh;
  }
  @media (max-height: 800px) and (max-width: 400px) {
    height: 15vh;
  }
`;

const StyledMessengersIcon = styled.img`
  position: absolute;
  left: 345px;
  z-index: 4;
  @media (max-width: 750px) {
    left: 30vw;
  }

  @media (max-height: 800px) {
    left: 30vw;
  }
`;

const StyledRigth = styled.span`
  position: relative;
`;

const StyledGreenCartoon = styled.img`
  position: absolute;
  top: 0px;
  right: 127px;
  @media (max-width: 750px) {
    right: 50px;
    width: 60px;
  }
  @media (max-width: 400px) {
    right: 20px;
    width: 50px;
  }
  @media (max-width: 350px) {
    right: 20px;
    width: 30px;
  }
  @media (max-height: 800px) {
    right: 50px;
    width: 50px;
  }
`;

const StyledYellowCartoon = styled.img`
  position: absolute;
  top: 50px;
  right: -40px;
  @media (max-width: 750px) {
    top: 70px;
    right: -20px;
    width: 70px;
  }
  @media (max-width: 400px) {
    top: 50px;
    right: -20px;
    width: 60px;
  }
  @media (max-width: 350px) {
    top: 40px;
    right: -15px;
    width: 40px;
  }
  @media (max-height: 800px) {
    top: 50px;
    right: -15px;
    width: 60px;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledLeft>
        <StyledRedCartoon src="img/red_cartoon 6.png" alt="" />

        <StyledMessengersIcon src="img/Group 5041.png" alt="" />
      </StyledLeft>
      <StyledRigth>
        <StyledGreenCartoon src="img/Group 80.png" alt="" />
        <StyledYellowCartoon src="img/red_cartoon 4.png" alt="" />
      </StyledRigth>
    </StyledFooter>
  );
};

export default Footer;
