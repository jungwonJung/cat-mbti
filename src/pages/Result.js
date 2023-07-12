import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ResultData } from "../assets/data/resultdata";

const Result = () => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const mbti = searchParams.get("mbti");
  const [resultData, setResultData] = React.useState({});

  React.useEffect(() => {
    const result = ResultData.find((s) => s.best === mbti);
    setResultData(result);
  }, [mbti]);

  const handleCopyUrl = () => {
    const currentUrl = window.location.href;
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        window.alert("URL has been copied.");
      })
      .catch((error) => {
        console.error("An error occurred while copying the URL.", error);
      });
  };

  return (
    <Wrapper>
      <Header>Which cat breed is purr-fect for me?</Header>
      <Contents>
        <Title>My Result</Title>
        <Info>{mbti}</Info>
        <LogoImage>
          <img
            src={resultData.image}
            width={350}
            height={350}
            className="rounded-circle"
            alt="cat-logo"
          />
        </LogoImage>
        <DescTitle>Purr-fect cat for you is a {resultData.name}</DescTitle>
        <Desc>Purr-fect cat for you is a {resultData.desc}</Desc>
        <ButtonGroup>
          <StyledButton onClick={() => navigate("/")}>
            🐈 Do it Again Test 🐈
          </StyledButton>
          <StyledButton2 onClick={handleCopyUrl}>
            🐈Share My Result🐈
          </StyledButton2>
        </ButtonGroup>
      </Contents>
    </Wrapper>
  );
};

export default Result;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  font-family: "Amatic SC";
  font-weight: 400;
  background-color: #fff5e4;
  min-width: 350px;

  @media (max-width: 1230px) {
    height: 110vh;
  }

  @media (max-width: 910px) {
    height: 120vh;
  }

  @media (max-width: 500px) {
    height: 140vh;
  }

  @media (max-width: 380px) {
    height: 190vh;
  }

  @media (max-height: 800px) {
    height: 190vh;
  }
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
  font-size: 4rem;
  margin-top: 10px;
`;

const Info = styled.div`
  font-size: 3rem;
  font-weight: 700;
`;

const LogoImage = styled.div`
  margin-top: 10px;
`;

const DescTitle = styled.div`
  font-size: 2.5rem;
  margin-top: 20px;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    font-weight: 700;
  }
`;

const Desc = styled.div`
  font-size: 2.5rem;
  margin-top: 10px;
  font-weight: 700;
  text-align: center;
  width: 70%;
  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.9rem;
    font-weight: 700;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: center;
  align-items: center;

  @media (max-width: 490px) {
    flex-direction: column;
  }
`;

const buttonStyles = `
  width: 25%;
  height: 60px;
  font-size: 2rem;
  text-align: center;
  margin-top: 20px;
  border: none;
  cursor: pointer;
  background-color: #ff9494;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff7079;
    color: black;
  }

  @media (max-width: 1230px) {
    font-size: 1.6rem;
    width: 30%;
  }

  @media (max-width: 850px) {
    font-size: 1.3rem;
    width: 35%;
  }

  @media (max-width: 615px) {
    width: 45%;
  }

  @media (max-width: 490px) {
    width: 60%;
  }
`;

const StyledButton = styled(Button)`
  ${buttonStyles}
`;

const StyledButton2 = styled(Button)`
  ${buttonStyles}
  margin-left: 20px;

  @media (max-width: 490px) {
    margin-left: 0;
  }
`;
