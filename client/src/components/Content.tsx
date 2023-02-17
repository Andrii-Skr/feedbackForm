import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { createFeedback, getFeedback } from "../store/reducers/actionCreator";

const StyledContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

const StyledContainer = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledMapBox = styled.div`
  height: 80vh;
  display: flex;
  justify-content: end;
`;

const StyledYellowCartoon = styled.img`
  position: relative;
  top: 15%;
  left: 70%;
`;

const StyledRedCartoon = styled.img`
  position: relative;
  top: 60%;
  left: 70%;
`;

const StyledForm = styled.form`
  display: flex;
  margin-left: 147px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const StyledInput = styled.input`
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  height: 93px;
  width: 25em;
  padding-left: 46px;
  margin-bottom: 8px;
  &::placeholder {
    font-weight: 400;
    font-size: 18px;
    line-height: 180%;
    color: #2d2d2d;
  }
`;

const StyledInputMessage = styled.textarea`
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  height: 8em;
  width: 25em;
  resize: none;
  margin-bottom: 23px;
`;

const StyledTitle = styled.h1`
  font-size: 40px;
  line-height: 130%;
  color: #3e3e3e;
  margin-bottom: 30px;
`;

const StyledCartoonBox = styled.div`
  width: 0;
`;

const StyledButton = styled.button`
  background: #fad34f;
  border: #fad34f;
  border-radius: 500px;
  line-height: 18px;
  color: #ffffff;
  height: 4em;
  width: 12em;
`;

const Content = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useAppDispatch();
  const Feedbacks = useAppSelector((state) => state.feedbackReducer);

  useEffect(() => {
    dispatch(getFeedback());
    if (!Feedbacks.isLoading) {
      console.log(Feedbacks.Feedbacks);
    }
  }, []);

  const sendBtn = () => {
    dispatch(createFeedback({ name: name, email: email, message: message }));
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <StyledContent>
      <StyledContainer>
        <StyledForm
          onSubmit={(e) => {
            e.preventDefault();
            (e.target as HTMLFormElement).reset();
          }}
        >
          <StyledTitle>Reach out to us!</StyledTitle>
          <StyledInput
            type="text"
            placeholder=" Your name*"
            required
            onInput={(e) => setName(e.currentTarget.value)}
          />
          <StyledInput
            type="email"
            placeholder=" Your e-mail*"
            defaultValue={""}
            required
            onInput={(e) => setEmail(e.currentTarget.value)}
          />
          <StyledInputMessage
            placeholder=" Your message*"
            required
            onInput={(e) => setMessage(e.currentTarget.value)}
          />
          <StyledButton onClick={() => sendBtn()}>Send message</StyledButton>
        </StyledForm>
      </StyledContainer>
      <StyledMapBox>
        <StyledMapBox>
          <StyledCartoonBox>
            <StyledRedCartoon src="src/assets/red_cartoon 3.png" alt="" />
            <StyledYellowCartoon src="src/assets/goodie1.png" alt="" />
          </StyledCartoonBox>
          <img src="src/assets/Mask Group.png" alt="" />
        </StyledMapBox>
      </StyledMapBox>
    </StyledContent>
  );
};

export default Content;
