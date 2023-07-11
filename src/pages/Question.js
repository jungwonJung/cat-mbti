import React from "react";
import styled from "styled-components";
import { ProgressBar, Button } from "react-bootstrap";
import { createSearchParams, useNavigate } from "react-router-dom";
import { QuestionData } from "../assets/data/questiondata";

const Question = () => {
  const navigate = useNavigate();

  const [questionNo, setQuestionNo] = React.useState(0);
  const [totalScore, setTotalScore] = React.useState([
    {
      id: "EI",
      score: 0,
    },
    {
      id: "SN",
      score: 0,
    },
    {
      id: "TF",
      score: 0,
    },
    {
      id: "JP",
      score: 0,
    },
  ]);

  const handleClickButton = (number, type) => {
    const newScore = totalScore.map((s) =>
      s.id === type ? { id: s.id, score: s.score + number } : s
    );
    setTotalScore(newScore);

    if (QuestionData.length !== questionNo + 1) {
      setQuestionNo(questionNo + 1);
    } else {
      // calculate score
      const mbti = newScore.reduce(
        (acc, cur) =>
          acc +
          (cur.score >= 2 ? cur.id.substring(0, 1) : cur.id.substring(1, 2)),
        ""
      );
      navigate({
        pathname: "/result",
        search: `?${createSearchParams({
          mbti: mbti,
        })}`,
      });
    }
  };

  return (
    <Wrapper>
      <ProgressBar
        striped
        variant="danger"
        now={(questionNo / QuestionData.length) * 100}
        style={{ marginTop: "20px" }}
      />
      <Title>{QuestionData[questionNo].title}</Title>
      <ButtonGroup>
        <Button
          style={{
            width: "40%",
            minHeight: "200px",
            fontSize: "2.5rem",
            textAlign: "center",
            backgroundColor: "#FF9494",
            border: "none",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onClick={() => handleClickButton(1, QuestionData[questionNo].type)}
          onMouseEnter={(e) => (
            (e.target.style.backgroundColor = "#FF7079"),
            (e.target.style.color = "black")
          )}
          onMouseLeave={(e) => (
            (e.target.style.backgroundColor = "#FF9494"),
            (e.target.style.color = "white")
          )}
        >
          {QuestionData[questionNo].answerA}
        </Button>
        <Button
          style={{
            width: "40%",
            minHeight: "200px",
            fontSize: "2.5rem",
            textAlign: "center",
            marginLeft: "20px",
            backgroundColor: "#FF9494",
            border: "none",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onClick={() => handleClickButton(0, QuestionData[questionNo].type)}
          onMouseEnter={(e) => (
            (e.target.style.backgroundColor = "#FF7079"),
            (e.target.style.color = "black")
          )}
          onMouseLeave={(e) => (
            (e.target.style.backgroundColor = "#FF9494"),
            (e.target.style.color = "white")
          )}
        >
          {QuestionData[questionNo].answerB}
        </Button>
      </ButtonGroup>
    </Wrapper>
  );
};
export default Question;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  font-family: "Amatic SC";
  font-weight: 700;
  background-color: #fff5e4;
`;

const Title = styled.div`
  font-size: 3rem;
  text-align: center;
  margin-top: 50px;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;
