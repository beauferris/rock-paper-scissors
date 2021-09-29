import Rock from '../images/icon-rock.svg'
import Paper from '../images/icon-paper.svg'
import Scissors from '../images/icon-scissors.svg'
import './PickedBoard.css'
import { Link } from 'react-router-dom';

const PickedBoard = (props) => {

    const choices = [
        { img: Rock, name: "Rock" },
        { img: Paper, name: "Paper" },
        { img: Scissors, name: "Scissors" }];

    return (

        <div className='choices'>

            <div className='my-choice'>
                <h4>You Picked</h4>
                <div className={'choices-circle ' + choices[props.choice].name + " " + props.gameState} >
                    <img src={choices[props.choice].img} className='icon' alt="Paper" ></img>
                </div>
            </div>

            <div className="message">
                <span className="game-message">{props.gameState} </span>
                <Link to="/">
                    <button onclick={props.playAgain}>Play Again</button>
                </Link>
            </div>


            <div className='computer-choice'>
                <h4>The House Picked</h4>
                <div className={props.gameState === 'YOU LOSE' ? 'choices-circle ' + choices[props.AIChoice].name + ' WON' :
                    'choices-circle ' + choices[props.AIChoice].name + " "} >
                    <img src={choices[props.AIChoice].img} className='icon' alt="Paper" ></img>
                </div>
            </div>

        </div>

    )
}

export default PickedBoard;