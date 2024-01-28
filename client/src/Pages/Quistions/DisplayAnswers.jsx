import React from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Avatar from '../../components/avatar/avatar';
import { deleteAnswer } from '../../actions/question';
const DisplayAnswers = ({ question, handleShare }) => {
  const User = useSelector(state => state.currentUserReducer);
  const dispatch = useDispatch()
  const {id} = useParams()

  const handleDelete = (answerId, noOfAnswers) => {
    dispatch(deleteAnswer(id, answerId, noOfAnswers - 1))
}

  
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
                  <button type="button" onClick={handleShare}>Share</button>
                  {
                      User?.result?._id === ans?.userId &&(
                       <button type='button'onClick={() => handleDelete(ans._id, question.noOfAnswers )} >Delete</button>
                       )
                  }
                </div>
                <div>
                  <p>Answered {moment(ans.answeredOn).fromNow()}</p>
                  {ans.userAnswered && (
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
                  )}
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
