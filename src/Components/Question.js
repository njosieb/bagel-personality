import React from 'react'

const Question = ([question, answers]) => {

    return (
        <div>
        <div class="question"> {question} </div>
            <div class="answers"> {answers.join('')} </div>
            </div>
    )
}

export default Question