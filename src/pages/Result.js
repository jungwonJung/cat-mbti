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

  return (
    <Wrapper>
      <Header>Which cat breed is purr-fect for me?</Header>
      <Contents>
        <Title>My Result</Title>
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
        <Button
          style={{
            width: "15%",
            height: 60,
            fontSize: "2rem",
            textAlign: "center",
            marginTop: "20px",
            backgroundColor: "#FF9494",
            border: "none",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onClick={() => navigate("/")}
          onMouseEnter={(e) => (
            (e.target.style.backgroundColor = "#FF7079"),
            (e.target.style.color = "black")
          )}
          onMouseLeave={(e) => (
            (e.target.style.backgroundColor = "#FF9494"),
            (e.target.style.color = "white")
          )}
        >
          🐈 Do it Again Test 🐈
        </Button>
      </Contents>
    </Wrapper>
  );
};

export default Result;

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
  font-size: 4rem;
  margin-top: 40px;
`;

const LogoImage = styled.div`
  margin-top: 10px;
`;

const DescTitle = styled.div`
  font-size: 2.5rem;
  margin-top: 20px;
  font-weight: 700;
`;

const Desc = styled.div`
  font-size: 2.5rem;
  margin-top: 20px;
  font-weight: 700;
  width: 70%;
`;
