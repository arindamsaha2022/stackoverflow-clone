import React from "react";
import { useLocation, useNavigate, } from 'react-router-dom';
import "./HomeMainBar.css";
import QuestionsList from "./QuestinosList";


const HomeMainbar = () => {
  const user = 1;
  var questionsList = [
    {
      _id: 1,
      upVotes: 5,
      downVotes: 2,
      noOfAnswers: 2,
      questionTitle: "What is a function1?",
      questionBody: "It meant to be",
      questionTags: ["java", "node js", "react js", "mongo db", "express js"],
      userPosted: "mano",
      userId: 1,
      askedOn: "jan 1",
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "kumar",
          answeredOn: "jan 2",
          userId: 2,
        },
      ],
    },
    {
      _id: 2,
      upVotes: 13,
      downVotes: 2,
      noOfAnswers: 0,
      questionTitle: "What is a function2?",
      questionBody: "It meant to be",
      questionTags: ["javascript", "R", "python"],
      userPosted: "mano",
      askedOn: "jan 1",
      userId: 1,
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "kumar",
          answeredOn: "jan 2",
          userId: 2,
        },
      ],
    },
    {
      _id: 3,
      upVotes: 30,
      downVotes: 2,
      noOfAnswers: 0,
      questionTitle: "What is a function3?",
      questionBody: "It meant to be",
      questionTags: ["javascript", "R", "python"],
      userPosted: "mano",
      askedOn: "jan 1",
      userId: 1,
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "kumar",
          answeredOn: "jan 2",
          userId: 2,
        },
      ],
    },
  ];
// Navigate
  const location = useLocation();
  const navigation = useNavigate()  
  const handleclick = () => {
    if(user === null){
        navigation('/Auth')
    }else{
      navigation('/AskQuestion')
    }
}
  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}
        <button to="/AskQuistion" onClick={handleclick} className="ask-btn">
          Ask Quistion
        </button>
      </div>

      <div>
        {questionsList === null ? (
          <h1>loding...</h1>
        ) : (
          <>
            <p>{questionsList.length} questions</p>
            <QuestionsList questionsList={questionsList} />
          </>
        )}
      </div>
    </div>
  );
};

export default HomeMainbar;
