import React, { useState } from 'react';
import '../styles/scoresheet.css';


const ScoreSheetCreator = () => {
  const initialQuestions = [
    { id: 1, text: 'Insert Scoresheet Title' },
    { id: 2, text: 'Insert Scoresheet Information' },
    { id: 3, text: 'Insert Reference Information' },
  ];

  const [questions, setQuestions] = useState(initialQuestions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [additionalQuestions, setAdditionalQuestions] = useState([
    { id: 1, text: 'Insert Question 1' },
  ]);

  const handleNextClick = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else if (currentQuestionIndex === questions.length - 1) {
      setCurrentQuestionIndex(questions.length);
    }
  };

  const handleBackClick = () => {
    if (currentQuestionIndex > questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else if (currentQuestionIndex === questions.length) {
      setCurrentQuestionIndex(questions.length - 1);
    }
  };

  const handleQuestionInputChange = (event) => {
    const updatedQuestions = [...questions, ...additionalQuestions];
    updatedQuestions[currentQuestionIndex].text = event.target.value;
    setQuestions(updatedQuestions);
  };

  const handleAdditionalQuestionInputChange = (event, index) => {
    const updatedQuestions = [...questions, ...additionalQuestions];
    updatedQuestions[index].text = event.target.value;
    setAdditionalQuestions(updatedQuestions.slice(questions.length));
  };

  const handleAddQuestion = () => {
    const newQuestion = { id: additionalQuestions.length + 1, text: 'Insert Question ' + (additionalQuestions.length + 1) };
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
          <p>{questions[currentQuestionIndex].text}</p>
          <input type="text" value={questions[currentQuestionIndex].text} onChange={handleQuestionInputChange} />
          <button onClick={handleBackClick}>Back</button>
          <button onClick={handleNextClick}>Next</button>
        </div>
      ) : (
        <div>
          {additionalQuestions.map((question, index) => (
            <div key={question.id} className="fade-in">
              <p>{question.text}</p>
              <input type="text" value={question.text} onChange={(event) => handleAdditionalQuestionInputChange(event, index)} />
            </div>
          ))}
          <div className="fade-in">
            <button onClick={handleAddQuestion}>Add Question</button>
          </div>
        </div>
      )}
      <div className="fade-in">
        {currentQuestionIndex === questions.length + additionalQuestions.length && (
          <button onClick={handleCreateScoresheet}>Create Scoresheet</button>
        )}
      </div>
    </div>
  );
};

export default ScoreSheetCreator;
