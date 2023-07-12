import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import logoCatImage from "../assets/logo-cat.jpg";

const Home = () => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate("/question");
  };

  return (
    <Wrapper>
      <Header>Which cat breed is purr-fect for me?</Header>
      <Contents>
        <Title>who is my owner?</Title>
        <LogoImage>
          <img
            src={logoCatImage}
            width={350}
            height={350}
            className="rounded-circle"
            alt="cat-logo"
          />
        </LogoImage>
        <Desc>Find a cat that suits my personality based on the MBTI test</Desc>
        <StyledButton onClick={handleClickButton}>
          🐈 Start Test!! 🐈
        </StyledButton>
      </Contents>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  font-family: "Amatic SC";
  font-weight: 400;
  background-color: #fff5e4;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.div`
  font-size: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Title = styled.div`
  font-size: 2.5rem;
  margin-top: 40px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.9rem;
    font-weight: 700;
  }
`;

const LogoImage = styled.div`
  margin-top: 10px;

  img {
    width: 350px;
    height: 350px;
    border-radius: 50%;
  }
`;

const Desc = styled.div`
  font-size: 2.5rem;
  margin-top: 20px;
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    font-weight: 700;
  }

  @media (max-width: 400px) {
    font-size: 1.3rem;
  }
`;

const StyledButton = styled(Button)`
  width: 60%;
  max-width: 400px;
  height: 60px;
  font-size: 2rem;
  text-align: center;
  margin-top: 20px;
  background-color: #ff9494;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff7079;
    color: black;
  }

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 90%;
    font-size: 1.6rem;
  }
`;
