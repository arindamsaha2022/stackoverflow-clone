import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../../components/avatar/avatar';


const DisplayAnswers = ({ question }) => {
  return (
    <div>
      <h3>Answers:</h3>
      {question.answer && question.answer.length === 0 ? (
        <p>No answers yet.</p>
      ) : (
        <ul>
          {question.answer.map((ans) => (
            <li key={ans._id} className="display-ans">
              <p>{ans.answerBody}</p>
              <div className="question-actions-user ">
                <div>
                  <button type="button">Share</button>
                  <button type="button">Delete</button>
                </div>
                <div>
                  <p>Answered {ans.answeredOn}</p>
                  <Link
                    to={`/Users/${ans.userId}`}
                    className="user-link"
                    style={{ color: '#0086d8' }}
                  >
                    <Avatar
                      backgroundColor="lightgreen"
                      px="8px"
                      py="5px"
                      borderRadius="4px"
                    >
                      {ans.userAnswered.charAt(0).toUpperCase()}
                    </Avatar>
                    <div>{ans.userAnswered}</div>
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DisplayAnswers;
