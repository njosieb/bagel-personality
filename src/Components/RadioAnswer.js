import React from 'react'

const RadioAnswer = ({ letter, answer, questionNumber }) => {
return (
    <label>
    <input type="radio" name={`question${questionNumber}`} value="{letter}"/>
    {letter} :
    {answer}
  </label>
)
    
}

export default RadioAnswer;