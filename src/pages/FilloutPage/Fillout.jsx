import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/scoresheet.css';
import { useParams } from 'react-router-dom';
import CustomToolbar from '../../CustomToolbar';
import Button from 'terra-button';

import { getAuthHeaders } from '../../auth';

const Fillout = () => {
  const [scoreSheetData, setScoreSheetData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // Fetch score sheet data using GET request with the id parameter
    axios.get(`${BASE_URL}/scoresheet/${id}`, getAuthHeaders())
      .then(response => {
        setScoreSheetData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  if (!scoreSheetData) {
    return <div>Loading...</div>;
  }

  console.log(scoreSheetData)
  const { scoresheetTitle, scoresheetInformation, scoresheetReference, additionalQuestions } = scoreSheetData;

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
    /*axios.put('your_api_endpoint', scoreSheetData)
      .then(response => {
        console.log('Data saved successfully:', response.data);
      })
      .catch(error => {
        console.log('Error saving data:', error);
      });*/
      print();
  };

  const renderQuestionInput = (question) => {
    switch (question.answerType) {
      
      case 'Yes/No':
        return (
          <div>
            <p className="fillout-question-text">{question.text}</p>
            <div className="radio-container">
            <label className="radio-label">
              <input
                type="radio"
                value="Yes"
                name={`question-${question.id}`}
                defaultChecked={question.answer === 'Yes'}
                onChange={(event) => handleInputChange(question.id, event)}
              />
              Yes
            </label>
            <label className="radio-label">
              <input
                type="radio"
                value="No"
                name={`question-${question.id}`}
                defaultChecked={question.answer === 'No'}
                onChange={(event) => handleInputChange(question.id, event)}
              />
              No
            </label>
            </div>
          </div>
        );
      case 'Multiple Option':
        return (
          <div>
            <p className="fillout-question-text">{question.text}</p>
            {question.inputFields.map((input, index) => (
              <div key={index} className="checkbox-container">
                <label className="checkbox-label">
                  <input className="checkbox-input"
                    type="checkbox"
                    name={`question-${question.id}`}
                    value={input}
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
            <p className="fillout-question-text">{question.text}</p>
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

  let date = new Date();

  return (
    <div>
      <CustomToolbar/>
      <div className="fillout-form">
        <center>
      <h1 className="fillout-title">{scoresheetTitle}</h1>
      <p className="fillout-info">{scoresheetInformation}</p>
      <p className="fillout-ref">{scoresheetReference}</p>
      <p>Report filled out on: {date.toLocaleDateString()} {date.toLocaleTimeString()}</p>

      {additionalQuestions.map((question) => (
        <div key={question.id}>
          {renderQuestionInput(question)}
        </div>
      ))}

      <p className='fillout-ref'>Additional info:</p>
      <textarea></textarea>
      <br></br>

      <Button className="button" text="Print" onClick={handleSave}></Button>
      </center>
    </div>
    </div>
  );
};

export default Fillout;
