import React, { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { createFeedback, getFeedback } from "../store/reducers/actionCreator";

const InputWidth = "557px";
const TextAreaHeight = "189px";
const InputHeight = "93px";

const StyledContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const StyledContainer = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;
const StyledWrapper = styled.div`
  position: relative;
`;
const StyledMapBox = styled.div`
  height: 80vh;
  display: flex;

  justify-content: end;
  @media (max-width: 750px) {
    position: absolute;
    right: 0;
  }
`;

const StyledYellowCartoon = styled.img`
  position: relative;
  top: 15%;
  left: 70%;
  @media (max-width: 750px) {
    top: 40%;
    width: 60px;
  }
  @media (max-width: 375px) {
    top: 35%;
    width: 60px;
  }
  @media (max-height: 800px) {
    top: 27%;
    width: 60px;
  }
`;

const StyledRedCartoon = styled.img`
  position: relative;
  top: 60%;
  left: 70%;
  @media (max-width: 750px) {
    width: 150px;
  }
  @media (max-height: 800px) {
    width: 150px;
  }
  @media (max-width: 350px) {
    width: 100px;
  }
`;

const StyledForm = styled.form`
  display: flex;
  margin-left: 147px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 750px) {
    margin-left: 5vw;
  }
  @media (max-width: 400px) {
    margin-left: 5vw;
  }
  @media (max-height: 800px) {
    margin-left: 5vw;
  }
`;
const StyledInput = styled.input`
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  height: ${InputHeight};
  width: ${InputWidth};
  padding: 31px 46px;

  margin-bottom: 8px;
  &::placeholder {
    color: #2d2d2d;
  }
  @media (max-width: 750px) {
    width: calc(${InputWidth} / 1.5);
  }
  @media (max-width: 400px) {
    padding: 15px 20px;
    width: 90vw;
  }
  @media (max-height: 800px) {
    width: calc(${InputWidth} / 1.7);
    padding: 15px 20px;
    width: 90vw;
  }
`;

const StyledInputMessage = styled.textarea`
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  padding: 31px 46px;
  height: ${TextAreaHeight};
  width: ${InputWidth};
  resize: none;
  margin-bottom: 23px;
  &::placeholder {
    color: #2d2d2d;
  }
  @media (max-width: 750px) {
    height: calc(${TextAreaHeight} / 1.5);
    width: calc(${InputWidth} / 1.5);
  }
  @media (max-width: 400px) {
    padding: 15px 20px;
    width: 90vw;
  }
  @media (max-height: 800px) {
    height: calc(${TextAreaHeight} / 1.7);
    width: calc(${InputWidth} / 1.7);
    padding: 15px 20px;
    width: 90vw;
  }
`;

const StyledTitle = styled.h1`
  font-size: 40px;
  line-height: 130%;
  color: #3e3e3e;
  margin-top: 20px;
  margin-bottom: 30px;
  @media (max-width: 350px) {
    font-size: 24px;
  }
`;

const StyledCartoonBox = styled.div`
  width: 0;
`;

const StyledButton = styled.button`
  background: #fad34f;
  border: #fad34f;
  border-radius: 500px;
  padding: 27px 52px;
  line-height: 18px;
  color: #ffffff;
`;

const Content = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useAppDispatch();
  const Feedbacks = useAppSelector((state) => state.feedbackReducer.Feedbacks);
  const isLoaded = useAppSelector((state) => state.feedbackReducer.isLoaded);

  useEffect(() => {
    dispatch(getFeedback());
  }, []);

  useEffect(() => {
    if (isLoaded) {
      console.log(Feedbacks);
    }
  }, [isLoaded]);

  const sendBtn = () => {
    let validation = true;
    document
      .querySelector(".form")
      ?.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("input, textarea")
      .forEach((e) => (validation = validation && e.checkValidity()));

    if (validation) {
      toast.success("Your feedback was sent");
      dispatch(createFeedback({ name: name, email: email, message: message }));
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <StyledContent>
      <StyledContainer>
        <Toaster />
        <StyledForm
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            (e.target as HTMLFormElement).reset();
          }}
        >
          <StyledTitle>Reach out to us!</StyledTitle>
          <StyledInput
            type="text"
            placeholder="Your name*"
            required
            onInput={(e) => setName(e.currentTarget.value)}
          />
          <StyledInput
            type="email"
            placeholder="Your e-mail*"
            defaultValue={""}
            required
            onInput={(e) => setEmail(e.currentTarget.value)}
          />
          <StyledInputMessage
            placeholder="Your message*"
            required
            onInput={(e) => setMessage(e.currentTarget.value)}
          />
          <StyledButton onClick={() => sendBtn()}>Send message</StyledButton>
        </StyledForm>
      </StyledContainer>
      <StyledWrapper>
        <StyledMapBox>
          <StyledCartoonBox>
            <StyledRedCartoon src="img/red_cartoon 3.png" alt="" />
            <StyledYellowCartoon src="img/goodie1.png" alt="" />
          </StyledCartoonBox>
          <img src="img/Mask Group.png" alt="" />
        </StyledMapBox>
      </StyledWrapper>
    </StyledContent>
  );
};

export default Content;
