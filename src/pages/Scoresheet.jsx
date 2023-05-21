import React, { useState } from 'react';
import '../styles/scoresheet.css';
import Button from 'terra-button';
import Radio from 'terra-form-radio';
import Input from 'terra-form-input';
import Text from 'terra-text';

const ScoreSheetCreator = () => {
  const initialQuestions = [
    { id: 1, text: 'Insert Scoresheet Title' },
    { id: 2, text: 'Insert Scoresheet Information' },
    { id: 3, text: 'Insert Reference Information' },
  ];

  const [questions, setQuestions] = useState(initialQuestions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [additionalQuestions, setAdditionalQuestions] = useState([
    { id: 1, text: 'Insert Question 1' , answerType: 'Yes/No'},
  ]);

  const handleNextClick = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else if (currentQuestionIndex === questions.length - 1) {
      setCurrentQuestionIndex(questions.length);
    }
  };

  const handleBackClick = () => {
    if (currentQuestionIndex > 0 && currentQuestionIndex <= questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else if (currentQuestionIndex > questions.length) {
      setCurrentQuestionIndex(questions.length);
    }
  };

  const handleQuestionInputChange = (event) => {
    const updatedQuestions = [...questions, ...additionalQuestions];
    updatedQuestions[currentQuestionIndex].text = event.target.value;
    setQuestions(updatedQuestions);
  };

  const handleAnswerTypeInputChange = (event, index) => {
    const updatedQuestions = [...questions, ...additionalQuestions];
    updatedQuestions[index].answerType = event.target.value;
    setAdditionalQuestions(updatedQuestions.slice(questions.length));
  };

  const handleAdditionalQuestionInputChange = (event, index) => {
    const updatedQuestions = [...questions, ...additionalQuestions];
    updatedQuestions[index].text = event.target.value;
    setAdditionalQuestions(updatedQuestions.slice(questions.length));
  };

  const handleRemoveQuestionClick = (index) => {
    setAdditionalQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions.splice(index, 1);
      return updatedQuestions.map((question, i) => {
        question.id = i;
        question.text = `Question ${i + 2}`;
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
    };
    setAdditionalQuestions([...additionalQuestions, newQuestion]);
  };

  const handleCreateScoresheet = () => {
    // Handle creating the scoresheet based on the questions
    // This function will depend on your specific implementation
  };

  return (
    <div>
      {currentQuestionIndex < questions.length ? (
        <div className="fade-in">
          <Text fontSize={20}>{questions[currentQuestionIndex].text}</Text>
          <input type="text" value={questions[currentQuestionIndex].text} onChange={handleQuestionInputChange} />
          <Button text="Back" onClick={handleBackClick} ></Button>
          <Button text="Next" onClick={handleNextClick} ></Button>
        </div>
      ) : (
        <div>
          {additionalQuestions.map((question, index) => (
            <div key={question.id} className="fade-in">
              <Text fontSize={20}>{question.text}</Text>
              <Input name="default blank input" id="blank" ariaLabel={question.text} onChange={(event) => handleAdditionalQuestionInputChange(event, index)}/>
              <div>
                <Radio id="first-inline" labelText="Yes/No" name={`inline-example-${index}`} isInline checked={question.answerType === 'Yes/No'} onChange={(event) => handleAnswerTypeInputChange(event, index)}/>
                <Radio id="second-inline" labelText="Multiple Option" name={`inline-example-${index}`} checked={question.answerType === 'Yes/No'} onChange={(event) => handleAnswerTypeInputChange(event, index)}isInline />
                <Radio id="third-inline" labelText="Scalar" name={`inline-example-${index}`} isInline checked={question.answerType === 'Yes/No'} onChange={(event) => handleAnswerTypeInputChange(event, index)}/>
                </div>
                <Button text="Remove Question" onClick={() => handleRemoveQuestionClick(index)} ></Button>
            </div>
          ))}
          <div className="fade-in">
            <Button text="Back" onClick={handleBackClick} ></Button>
            <Button text="Add Question" onClick={handleAddQuestion} ></Button>
            <Button text="Next" onClick={handleNextClick} ></Button>
          </div>
        </div>
      )}
      <div className="fade-in">
        {currentQuestionIndex === questions.length + additionalQuestions.length && (
          <Button text="Create Scoresheet" onClick={handleCreateScoresheet} ></Button>
        )}
      </div>
    </div>
  );
};

export default ScoreSheetCreator;
