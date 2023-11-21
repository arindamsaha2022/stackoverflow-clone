import React from "react";
import QuestionList from "../../components/HomeMainbar/QuestinosList";
import { useParams, Link } from "react-router-dom";
import "./Questions.css";
import Avatar from "../../components/avatar/avatar";
import DisplayAnswers from "./DisplayAnswers";
import up from "../../assets/up.svg";
import down from "../../assets/down.svg";

const QuestionDetails = () => {
  const { id } = useParams();
  console.log(id);
  var questionsList = [
    {
      _id: 1,
      upVotes: 5,
      downVotes: 2,
      noOfAnswers: 2,
      questionTitle: "What is a statement?",
      questionBody: "It meant to be",
      questionTags: ["java", "node js", "react js", "mongo db", "express js"],
      userPosted: "mano",
      userId: 1,
      askedOn: "jan 1",
      answer: [
        {
          answerBody: "use chat gpt to find the answer",
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
      noOfAnswers: 1,
      questionTitle: "data types ?",
      questionBody: "It meant to be",
      questionTags: ["javascript", "R", "python"],
      userPosted: "mano",
      askedOn: "jan 1",
      userId: 1,
      answer: [
        {
          answerBody: "find this answer from youtube",
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
      noOfAnswers: 1,
      questionTitle: "What is a function3?",
      questionBody: "It meant to be",
      questionTags: ["javascript", "R", "python"],
      userPosted: "mano",
      askedOn: "jan 1",
      userId: 1,
      answer: [
        {
          answerBody:
            "n simple words, a function is a relationship between inputs where each input is related to exactly one output. ",
          userAnswered: "kumar",
          answeredOn: "jan 2",
          userId: 2,
        },
      ],
    },
  ];
  return (
    <div className="question-details-page">
      {questionsList === null ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {questionsList
            .filter((question) => question._id == id)
            .map((question) => (
              <div key={question._id}>
                {console.log(question)}
                <section className="question-details-container">
                  <div className="questionTitle">
                    <h1>{question.questionTitle}</h1>
                  </div>

                  <div className="question-details-container-2">
                    <div className="question-votes box">
                      <img src={up} alt="" width="18" className="votes-icon" />
                      <p> {question.upVotes - question.downVotes}</p>
                      <img
                        src={down}
                        alt=""
                        width="18"
                        className="votes-icon"
                      />
                    </div>

                    <div style={{ width: "100%" }} className="subtitle">
                      <p className="question-body box">
                        {question.questionBody}
                      </p>

                      <div className="question-details-tags">
                        {question.questionTags.map((tag, index) => (
                          <p key={tag}>{tag}</p>
                        ))}
                      </div>

                      <div className="question-actions-user">
                        <div>
                          <button type="button">Share</button>
                          <button type="button">Delete</button>
                        </div>
                        <div>
                          <p>asked {question.askedOn}</p>
                          <Link
                            to={`/User/${question.userId}`}
                            className="user-link"
                            style={{ color: "#0086" }}
                          >
                            <Avatar
                              backgroundColor="orange"
                              px="8px"
                              py="5px"
                              borderRadius="4px"
                            >
                              {question.userPosted.charAt(0).toUpperCase()}
                            </Avatar>
                            <div>{question.userId}</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {question.noOfAnswers == 0 ? null : (
                  <section>
                    <h1>{question.noOfAnswers}answers</h1>
                    <DisplayAnswers question={question} key={question._id} />
                  </section>
                )}
                <section className="post-ans-container">
                  <h1>your answers</h1>
                  <from>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <br />
                    <input
                      type="submit"
                      className="post-ans-btn"
                      value="post your Answer"
                    />
                  </from>
                  <p>
                    browse other questions
                    {question.questionTags.map((tag) => (
                      <Link to="/Tags" key={tag} className="ans-tags"></Link>
                    ))}{" "}
                    or{" "}
                    {
                      <Link
                        to="/AskQusetion"
                        style={{ textDecoration: "none", color: "#009dff" }}
                      >
                        {" "}
                        Ask your own question.{" "}
                      </Link>
                    }
                  </p>
                </section>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default QuestionDetails;
