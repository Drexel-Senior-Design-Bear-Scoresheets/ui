import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/scoresheet.css';

const Fillout = () => {
  const [scoreSheetData, setScoreSheetData] = useState(null);

  useEffect(() => {
    // Fetch score sheet data using GET request
    axios.get('your_api_endpoint')
      .then(response => {
        setScoreSheetData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  if (!scoreSheetData) {
    return <div>Loading...</div>;
  }

  const { title, information, reference, additionalQuestions } = scoreSheetData;

  const handleInputChange = (questionId, event) => {
    const updatedQuestions = additionalQuestions.map(question => {
      if (question.id === questionId) {
        return {
          ...question,
          answer: event.target.value,
        };
      }
      return question;
    });

    setScoreSheetData({
      ...scoreSheetData,
      additionalQuestions: updatedQuestions,
    });
  };

  const handleSave = () => {
    // Send PUT request to save the modified data
    axios.put('your_api_endpoint', scoreSheetData)
      .then(response => {
        console.log('Data saved successfully:', response.data);
      })
      .catch(error => {
        console.log('Error saving data:', error);
      });
  };

  const renderQuestionInput = (question) => {
    switch (question.answerType) {
      case 'Yes/No':
        return (
          <div>
            <label>
              <input
                type="radio"
                value="Yes"
                name={`question-${question.id}`}
                checked={question.answer === 'Yes'}
                onChange={(event) => handleInputChange(question.id, event)}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                value="No"
                name={`question-${question.id}`}
                checked={question.answer === 'No'}
                onChange={(event) => handleInputChange(question.id, event)}
              />
              No
            </label>
          </div>
        );
      case 'Multiple Option':
        return (
          <div>
            <p>{question.text}</p>
            {question.inputFields.map((input, index) => (
              <div key={index}>
                <label>
                  <input
                    type="checkbox"
                    name={`question-${question.id}`}
                    value={input}
                    checked={question.answer.includes(input)}
                    onChange={(event) => handleInputChange(question.id, event)}
                  />
                  {input}
                </label>
              </div>
            ))}
          </div>
        );
      case 'Scalar':
        return (
          <div>
            <p>{question.text}</p>
            <input
              type="text"
              name={`question-${question.id}`}
              value={question.answer}
              onChange={(event) => handleInputChange(question.id, event)}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>{title}</h1>
      <p>{information}</p>
      <p>{reference}</p>

      {additionalQuestions.map((question) => (
        <div key={question.id}>
          {renderQuestionInput(question)}
        </div>
      ))}

      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default Fillout;
