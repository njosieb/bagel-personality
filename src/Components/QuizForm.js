import React from 'react'
import './QuizForm.css'
import SubmitBtn from './SubmitBtn'
import Question from './Question'

const myQuestions = [
  {
    question: 'What beverage do you drink most often for breakfast? ',
    answers: [
      'Iced or Hot Coffee',
      'Smoothie',
      'Iced or Hot Tea',
      'Hot Chocolate',
      'Milk or Orange Juice',
    ],
  },
  {
    question: 'Which Panera Coffee Beverage would you choose?',
    answers: [
      'Iced or Hot Cinnamon Crunch Latte',
      'Iced or Hot Chai Tea Latte',
      'Iced or Hot Caffe Latte',
      'Frozen Chocolate Cold Brew',
      'Americano',
    ],
  },
  {
    question: 'What type of breakfast would you choose?',
    answers: [
      'Breakfast Sandwich',
      'Parfait/Yogurt or Fresh Fruit',
      'Oatmeal',
      'Pastry',
      'Baked Egg Souffle',
    ],
  },
  {
    question: 'What cream cheese would you choose?',
    answers: [
      'Honey Walnut Cream Cheese',
      'Chive and Onion Cream Cheese',
      'Plain Cream Cheese',
      'Butter',
      'I don’t put anything on my bagel',
    ],
  },
  {
    question: 'Which Panera Breakfast sandwich/wrap would you choose?',
    answers: [
      'Sausage, Scrambled Egg & Cheese on Brioche',
      'Avocado, Egg White & Spinach',
      'Bacon, Scrambled Egg & Tomato Wrap',
      'Bacon, Scrambled Egg & Cheese on Ciabatta',
      'Egg & Cheese on Brioche',
    ],
  },
  {
    question: 'Which Panera Bakery Item would you choose?',
    answers: [
      'Bear Claw',
      'Blueberry Muffin with Fresh Blueberries',
      'Orange Scone',
      'Chocolate Chip Muffie',
      'Croissant',
    ],
  },
  {
    question: 'Which Panera Cookie would you choose?',
    answers: [
      'Candy Cookie',
      'Oatmeal Raisin with Berries',
      'Kitchen Sink Cookie',
      'Chocolate Chip Cookie',
      'Lemon Drop Cookie',
    ],
  },
  {
    question:
      'If you were selecting something sweet to pick up for a small gathering what would you choose?',
    answers: [
      'Vanilla Cinnamon Roll 4-Pack',
      'Mini Scone Variety Pack',
      'Pastry Ring',
      'Petite Chocolate Chip Cookies 12 Pack',
      'Cinnamon Crumb Coffee Cake Whole',
    ],
  },
]

const QuizForm = () => {
  // const quizContainer = document.getElementById('quiz')
  //   const resultsContainer = document.getElementById('results')
  //   const submitButton = document.getElementById('submit')

  function buildQuiz() {
    // variable to store the HTML output
    const output = []

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // variable to store the list of possible answers
      const answers = []
      let letter = ''

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
        <input type="radio" name="question${questionNumber}" value="${letter}">
        ${letter} :
        ${currentQuestion.answers[letter]}
      </label>`
        )
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
    <div class="answers"> ${answers.join('')} </div>`
      )
    })

    // finally combine our output list into one string of HTML and put it on the page
    // quizContainer.innerHTML = output.join('')
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = [] //quizContainer.querySelectorAll('.answers')

    // keep track of user's answers
    // let numCorrect = 0
    let numA = 0
    let numB = 0
    let numC = 0
    let numD = 0
    let numE = 0

    const resultA = 'Cinnamon Crunch Bagel'
    const resultB = 'Blueberry Bagel'
    const resultC = 'Sesame Bagel'
    const resultD = 'Chocolate Chip Bagel'
    const resultE = 'Plain Bagel'
    const tie = 'Everything Bagel'

    // for each question...
    // myQuestions.forEach((currentQuestion, questionNumber) => {
    myQuestions.forEach((questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber]
      const selector = `input[name=question${questionNumber}]:checked`
      const userAnswer = (answerContainer.querySelector(selector) || {}).value

      // if (userAnswer === currentQuestion.correctAnswer) {
      if (userAnswer === myQuestions.answers[0]) {
        numA++
        console.log(numA)
      } else if (userAnswer === myQuestions.answers[1]) {
        numB++
        console.log(numB)
      } else if (userAnswer === myQuestions.answers[2]) {
        numC++
        console.log(numC)
      } else if (userAnswer === myQuestions.answers[3]) {
        numD++
        console.log(numD)
      } else if (userAnswer === myQuestions.answers[4]) {
        numE++
        console.log(numE)
      }

      //  If mostly A is chosen it would be a Cinnamon Crunch bagel
      // If mostly B is chosen it would be a blueberry bagel
      // If mostly C is chosen it would be a sesame bagel
      // If mostly D is chosen it would be a chocolate chip bagel
      // If mostly E is chosen it would be a plain bagel
      // If the answers are kind of evenly split or erratic (like all over the place lol) I would put it as an everything bagel
      if (numA.value >= 5) {
        console.log(resultA)
      } else if (numB.value >= 5) {
        console.log(resultB)
      } else if (numC.value >= 5) {
        console.log(resultC)
      } else if (numD.value >= 5) {
        console.log(resultD)
      } else if (numE.value >= 5) {
        console.log(resultE)
      } else {
        console.log(tie)
      }

      // show number of correct answers out of total
      // resultsContainer.innerHTML = `${numA} out of ${myQuestions.length}`
      // resultsContainer.innerHTML = `${numB} out of ${myQuestions.length}`
      // resultsContainer.innerHTML = `${numC} out of ${myQuestions.length}`
      // resultsContainer.innerHTML = `${numD} out of ${myQuestions.length}`
      // resultsContainer.innerHTML = `${numE} out of ${myQuestions.length}`
    })
  }

  return (
    <div>
      <div className="header-text">
        <h1>What Is Your Bagel Personality?</h1>
      </div>
      <div id="quiz" className="quiz-container">
        <form className="quiz-form">
          <h1>QUIZ FORM</h1>
          <div>
            {/* {myQuestions.map(Question =>
              <li>
                {Question}
            </li>
            )} */}
            {/* <Question /> */}
          </div>
        </form>
      </div>
      <div id="submit">
        <SubmitBtn />
      </div>
      <div id="results">Results</div>
    </div>
  )
}

export default QuizForm
// *****

// import React from 'react'
// import './QuizForm.css'
// import SubmitBtn from './SubmitBtn'

// const QuizForm = () => {
//   return (
//     <div>
//       <div className="header-text">
//         <h1>What Is Your Bagel Personality?</h1>
//       </div>
//       <div id="quiz" className="quiz-container">
//         <form className="quiz-form">
//           <h1>QUIZ FORM</h1>
//           {/* <div>{ quizContainer }</div> */}
//           <div>
//           question: 'What beverage do you drink most often for breakfast? ',
//          answers: {
//            a: 'Iced or Hot Coffee',
//            b: 'Smoothie',
//            c: 'Iced or Hot Tea',
//            d: 'Hot Chocolate',
//            e: 'Milk or Orange Juice',
//           </div>
//          },
//        },
//        {
//          question: 'Which Panera Coffee Beverage would you choose?',
//          answers: {
//            a: 'Iced or Hot Cinnamon Crunch Latte',
//            b: 'Iced or Hot Chai Tea Latte',
//            c: 'Iced or Hot Caffe Latte',
//            d: 'Frozen Chocolate Cold Brew',
//            e: 'Americano',
//          },
//        },
//        {
//          question: 'What type of breakfast would you choose?',
//          answers: {
//            a: 'Breakfast Sandwich',
//            b: 'Parfait/Yogurt or Fresh Fruit',
//            c: 'Oatmeal',
//            d: 'Pastry',
//            e: 'Baked Egg Souffle',
//          },
//        },
//        {
//          question: 'What cream cheese would you choose?',
//          answers: {
//            a: 'Honey Walnut Cream Cheese',
//            b: 'Chive and Onion Cream Cheese',
//            c: 'Plain Cream Cheese',
//            d: 'Butter',
//            e: 'I don’t put anything on my bagel',
//          },
//        },
//        {
//          question: 'Which Panera Breakfast sandwich/wrap would you choose?',
//          answers: {
//            a: 'Sausage, Scrambled Egg & Cheese on Brioche',
//            b: 'Avocado, Egg White & Spinach',
//            c: 'Bacon, Scrambled Egg & Tomato Wrap',
//            d: 'Bacon, Scrambled Egg & Cheese on Ciabatta',
//            e: 'Egg & Cheese on Brioche',
//          },
//        },
//        {
//          question: 'Which Panera Bakery Item would you choose?',
//          answers: {
//            a: 'Bear Claw',
//            b: 'Blueberry Muffin with Fresh Blueberries',
//            c: 'Orange Scone',
//            d: 'Chocolate Chip Muffie',
//            e: 'Croissant',
//          },
//        },
//        {
//          question: 'Which Panera Cookie would you choose?',
//          answers: {
//            a: 'Candy Cookie',
//            b: 'Oatmeal Raisin with Berries',
//            c: 'Kitchen Sink Cookie',
//            d: 'Chocolate Chip Cookie',
//            e: 'Lemon Drop Cookie',
//          },
//        },
//        {
//          question:
//            'If you were selecting something sweet to pick up for a small gathering what would you choose?',
//          answers: {
//            a: 'Vanilla Cinnamon Roll 4-Pack',
//            b: 'Mini Scone Variety Pack',
//            c: 'Pastry Ring',
//            d: 'Petite Chocolate Chip Cookies 12 Pack',
//            e: 'Cinnamon Crumb Coffee Cake Whole',
//         </form>
//       </div>
//       <div id="submit">
//         <SubmitBtn />
//       </div>
//       <div id="results">Results</div>
//     </div>
//   )
// }

// export default QuizForm
