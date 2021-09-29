import Triangle from '../images/bg-triangle.svg';
import Rock from '../images/icon-rock.svg';
import Paper from '../images/icon-paper.svg';
import Scissors from '../images/icon-scissors.svg';
import { Link } from 'react-router-dom';

import './ChoiceBoard.css';

const ChoiceBoard = (props) => {
    return (
        <>
            <div className='Board'>
                <Link to='/picked'>
                    <img src={Triangle} className='Triangle' alt='Background'></img>
                </Link>

                <Link to='/picked'>
                    <div className='rock-circle' onClick={props.choice} id="0" >
                        <img src={Rock} onClick={props.choice} id="0" className='icon' alt="Rock"></img>
                    </div>
                </Link>
                
                <Link to='/picked'>
                    <div className='paper-circle' onClick={props.choice} id="1" >
                        <img src={Paper} onClick={props.choice} className='icon' id='1' alt="Paper" ></img>
                    </div>
                </Link>

                <Link to='/picked'>
                <div className='scissor-circle' onClick={props.choice} id="2" >
                    <img src={Scissors} onClick={props.choice} id="2" className='icon' alt="Pair of scissors"></img>
                </div>
                </Link>
                
            </div>
        </>
    )
}

export default ChoiceBoard;