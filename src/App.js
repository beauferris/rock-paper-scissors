import './App.css';
import Board from './components/ChoiceBoard'
import Header from './components/Header'
import { useState, useEffect } from 'react';
import PickedBoard from './components/PickedBoard';
import { Switch,Route,useLocation} from "react-router-dom";

import { TransitionGroup, CSSTransition } from "react-transition-group";

function App() {
  const [playerChoice, setPlayerChoice] = useState('0');
  const [computerChoice, setComputerChoice] = useState((Math.floor(Math.random() * (2 + 1)).toString()));
  const [gameDecision, setGameDecision] = useState('');
  const [score, setScore] = useState(0);
  const [rounds, setRounds] = useState(0);

  const location = useLocation();

  const choiceHandler = (event) => {
  
    setPlayerChoice(event.target.id)
    setComputerChoice((Math.floor(Math.random() * (2 + 1)).toString()))
    setRounds((prevState=> prevState+1));
    
  }

  useEffect(() => {
    if (playerChoice === '0') {
      if (computerChoice === '0') {
        setGameDecision('TIE');
      } else if (computerChoice === '1') {
        setGameDecision('YOU LOSE');
      } else if (computerChoice === '2') {
        setGameDecision("YOU WON");
        setScore((prevState)=>(prevState+1));
      }
    }

    else if (playerChoice === '1') {
      if (computerChoice === '0') {
        setGameDecision('YOU WON');
        setScore((prevState)=>(prevState+1));
      } else if (computerChoice === '1') {
        setGameDecision('TIE')
      } else if (computerChoice === '2') {
        setGameDecision("YOU LOSE")
      }
    }
    else if (playerChoice === '2') {
      if (computerChoice === '0') {
        setGameDecision('YOU LOSE');
      } else if (computerChoice === '1') {
        setGameDecision('YOU WON');
        setScore((prevState)=>(prevState+1));
      } else if (computerChoice === '2') {
        setGameDecision("TIE")
      }
    }

    

  }, [playerChoice, computerChoice, rounds])

  return (
    <div className="App">
      <Header score={score}/>
        <TransitionGroup>
          <CSSTransition 
          timeout={10}
           classNames='ease'
           key={location.key}
           >
            <Switch>
              <Route path='/'
                exact={true}
                render={props => <Board choice={choiceHandler} {...props} />} />
              <Route
                path='/picked'
                render={props => <PickedBoard gameState={gameDecision} choice={playerChoice} AIChoice={computerChoice} {...props} />} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
    </div>
  );
}

export default App;
