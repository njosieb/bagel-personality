import React from 'react'
import './App.css';
import NavBar from './Components/NavBar';

import HomePage from './Components/HomePage';
import QuizForm from './Components/QuizForm';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// import HomePage from './Components/HomePage';

// const HomeRoute = withRouter(HomePage)
// const QuizRoute = withRouter(QuizForm)
// const MealRoute = withRouter(MealModal)

function App() {


  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/' >
          <HomePage />
          </Route>
          <Route exact path='/quiz' >
          <QuizForm/>
          </Route>
        </Switch>
      </Router>
     </div>
  )
}

export default App;
