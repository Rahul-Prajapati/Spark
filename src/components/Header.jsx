import  spark_flame_icon  from '../assets/spark_flame_icon.svg';
import './Header.css'

const Header = () => {

    return (
        <div className='header'>
            <div className='header-left'>
                <img src={spark_flame_icon} alt="LOGO" />
                <h1>SPARK</h1><sup>TM </sup>
                <p> | Marketplace</p>
            </div>

            <button>Sign up free</button>
        </div>
    )

}

export default Header