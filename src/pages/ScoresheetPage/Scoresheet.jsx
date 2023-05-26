import React, { useState, useEffect } from 'react';
import '../../styles/scoresheet.css';
import Button from 'terra-button';
import Radio from 'terra-form-radio';
import Input from 'terra-form-input';
import Text from 'terra-text';
import axios from 'axios';

import CustomToolbar from '../../CustomToolbar';

const ScoreSheetCreator = () => {
  const initialQuestions = [
    { id: 1, text: 'Insert Scoresheet Title', data: '' },
    { id: 2, text: 'Insert Scoresheet Information', data: '' },
    { id: 3, text: 'Insert Reference Information', data: '' },
  ];

  const [questions, setQuestions] = useState(initialQuestions);
  const [additionalQuestions, setAdditionalQuestions] = useState([
    { id: 1, text: 'Insert Question 1', answerType: 'Yes/No', data: '', showInputField: false, inputFields: [] },
  ]);

  const handleQuestionInputChange = (event, index) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].data = event.target.value;
    setQuestions(updatedQuestions);
  };

  const handleAnswerTypeInputChange = (event, index) => {
    const updatedQuestions = [...additionalQuestions];
    updatedQuestions[index].answerType = event.target.value;
    updatedQuestions[index].showInputField = event.target.value === 'Multiple Option';
    setAdditionalQuestions(updatedQuestions);
  };

  const handleAdditionalQuestionInputChange = (event, index) => {
    const updatedQuestions = [...additionalQuestions];
    updatedQuestions[index].data = event.target.value;
    setAdditionalQuestions(updatedQuestions);
  };

  const handleInputFieldChange = (event, questionIndex, inputIndex) => {
    const updatedQuestions = [...additionalQuestions];
    updatedQuestions[questionIndex].inputFields[inputIndex] = event.target.value;
    setAdditionalQuestions(updatedQuestions);
  };

  const handleAddInputField = (index) => {
    const updatedQuestions = [...additionalQuestions];
    updatedQuestions[index].inputFields.push('');
    setAdditionalQuestions(updatedQuestions);
  };

  const handleRemoveInputField = (index, inputIndex) => {
    const updatedQuestions = [...additionalQuestions];
    updatedQuestions[index].inputFields.splice(inputIndex, 1);
    setAdditionalQuestions(updatedQuestions);
  };

  const handleRemoveQuestionClick = (index) => {
    setAdditionalQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions.splice(index, 1);
      return updatedQuestions.map((question, i) => {
        question.id = i + 1;
        question.text = `Insert Question ${i + 2}`;
        question.answerType = 'Yes/No';
        return question;
      });
    });
  };

  const handleAddQuestion = () => {
    const newQuestion = {
      id: additionalQuestions.length + 1,
      text: 'Insert Question ' + (additionalQuestions.length + 1),
      answerType: 'Yes/No',
      showInputField: false,
      inputFields: [],
    };
    setAdditionalQuestions([...additionalQuestions, newQuestion]);
  };

  const [selectedKeyword, setSelectedKeyword] = useState('');
  const keywords = ["EDF", "ADHD DHA-5"];

  const handleKeywordChange = (event) => {
    setSelectedKeyword(event.target.value);
  };

  const handleCreateScoresheet = () => {
    const scoresheetData = {
      scoresheetTitle: questions[0].data,
      scoresheetInformation: questions[1].data,
      scoresheetReference: questions[2].data,
      selectKeyword: selectedKeyword,
      scoresheetDate: new Date().toISOString(), // Add the current date as an ISO string
      additionalQuestions: additionalQuestions.map((question) => ({
        text: question.data,
        answerType: question.answerType,
        inputFields: question.inputFields,
      })),
    };
    console.log(scoresheetData);
    
  
    // Send a POST request to create a scoresheet
    axios
      .post('http://localhost:5000/scoresheet/new', {
        scoresheetData,
        userId: 'your_user_id', // Replace with the actual user ID
      })
      .then((response) => {
        // Handle the response from the API
        console.log('Scoresheet created:', response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error('Error creating scoresheet:', error);
      });
  };


  return (
    <div className="scoresheet-container">
    <center>
      <CustomToolbar></CustomToolbar>
      <div className="scoresheet-form">
          <h1>Create New Scoresheet</h1>
          <div className="fade-in">
            {questions.map((question, index) => (
              <div key={question.id}>
                <Text fontSize={20}>{question.text}</Text>
                <div className="text-input">
                  <Input
                    name={`question-${index}`}
                    id={`question-${index}`}
                    onChange={(event) => handleQuestionInputChange(event, index)}
                  />
                </div>
              </div>
            ))}
          </div>
          <div>
            {keywords.map((keyword) => (
              <label key={keyword}>
                <input
                  type="radio"
                  value={keyword}
                  checked={selectedKeyword === keyword}
                  onChange={handleKeywordChange}
                />
                {keyword}
              </label>
            ))}
          </div>
          {additionalQuestions.map((question, index) => (
            <div key={question.id} className="fade-in">
              <Text fontSize={20}>{question.text}</Text>
              <div className="text-input">
                <Input
                  name={`additional-question-${index}`}
                  id={`additional-question-${index}`}
                  onChange={(event) => handleAdditionalQuestionInputChange(event, index)}
                />
              </div>
              <div>
                <label>Yes/No</label>
                <Radio
                  id={`answer-type-yesno-${index}`}
                  name={`answer-type-${index}`}
                  checked={question.answerType === 'Yes/No'}
                  value="Yes/No"
                  onChange={(event) => handleAnswerTypeInputChange(event, index)}
                  isInline
                />
                <label>Multiple Option</label>
                <Radio
                  id={`answer-type-multiple-${index}`}
                  name={`answer-type-${index}`}
                  checked={question.answerType === 'Multiple Option'}
                  value="Multiple Option"
                  onChange={(event) => handleAnswerTypeInputChange(event, index)}
                  isInline
                />
                <label>Scalar</label>
                <Radio
                  id={`answer-type-scalar-${index}`}
                  name={`answer-type-${index}`}
                  checked={question.answerType === 'Scalar'}
                  value="Scalar"
                  onChange={(event) => handleAnswerTypeInputChange(event, index)}
                  isInline
                />
                {question.showInputField && (
                  <div>
                    <Text fontSize={20}>Input Fields:</Text>
                    {question.inputFields.map((input, inputIndex) => (
                      <div key={inputIndex}>
                        <div className="text-input">
                          <Input
                            name={`input-field-${index}-${inputIndex}`}
                            id={`input-field-${index}-${inputIndex}`}
                            onChange={(event) => handleInputFieldChange(event, index, inputIndex)}
                          />
                        </div>
                        <Button
                          className="button"
                          text="Remove Input Field"
                          onClick={() => handleRemoveInputField(index, inputIndex)}
                        />
                      </div>
                    ))}
                    <Button
                      className="button"
                      text="Add Input Field"
                      onClick={() => handleAddInputField(index)}
                    />
                  </div>
                )}
                <Button
                  className="button"
                  text="Remove Question"
                  onClick={() => handleRemoveQuestionClick(index)}
                />
              </div>
            </div>
          ))}
          <div className="fade-in">
            <Button className="button" text="Add Question" onClick={handleAddQuestion}></Button>
          </div>
          <div>
            <Button className="button" text="Create Scoresheet" onClick={handleCreateScoresheet}></Button>
          </div>
        </div>
    </center>
    </div>
  );
};

export default ScoreSheetCreator;
