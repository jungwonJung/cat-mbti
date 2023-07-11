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
        <Button
          style={{
            width: "19%",
            height: 60,
            fontSize: "2rem",
            textAlign: "center",
            marginTop: "20px",
            backgroundColor: "#FF9494",
            border: "none",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onClick={handleClickButton}
          onMouseEnter={(e) => (
            (e.target.style.backgroundColor = "#FF7079"),
            (e.target.style.color = "black")
          )}
          onMouseLeave={(e) => (
            (e.target.style.backgroundColor = "#FF9494"),
            (e.target.style.color = "white")
          )}
        >
          🐈 Start Test!! 🐈
        </Button>
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
`;

const Title = styled.div`
  font-size: 2.5rem;
  margin-top: 40px;
`;

const LogoImage = styled.div`
  margin-top: 10px;
`;

const Desc = styled.div`
  font-size: 2.5rem;
  margin-top: 20px;
`;
