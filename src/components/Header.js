import './Header.css';
import logo from '../images/logo.svg';

const Header = (props) => {
    return (
        <div className='Header'>
            <div>
                <img alt="header" src={logo}></img>
            </div>

            <div className='score'>
                <span className='score-title'>score</span><br></br>
                <span className='score-number'>{props.score}</span>
            </div>

        </div>
    )

}

export default Header;