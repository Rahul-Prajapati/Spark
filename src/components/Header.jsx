import  spark_flame_icon  from '../assets/spark_flame_icon.svg';
import './Header.css'
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();

    return (
        <div className='header'>
            <div className='header-left'>
                <img src={spark_flame_icon} alt="LOGO" />
                <h1>SPARK<sup className='tm'>TM</sup></h1>
                <p> | Marketplace</p>
            </div>

            <button onClick={() => navigate('/signup')}>Sign up free</button>
        </div>
    )

}

export default Header