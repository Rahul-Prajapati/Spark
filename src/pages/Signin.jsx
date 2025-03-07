import SparkGroupLogo from '../assets/SparkGroupLogo.png'
import AuthFrame from '../assets/AuthFrame.png'
import { useState } from 'react'
import './Signin.css'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    const handleLogin = async () => {
        const { username, password } = formData;
        const response = await fetch(`${import.meta.env.VITE_SERVER_API}/api/auth/signin`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        });
      
        const data = await response.json();
        if (data.token) {
            toast.success("Login successfully")
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          navigate('/dashboard');
        }  
        else {
            toast.error("Something went wrong")
        }
      };

    const handleSubmit = (e) =>{
        e.preventDefault();
        handleLogin();


    }

    return (
        <div className="Auth-Container">

            <div className="Auth-left">
                <img className='sparkLogo' src={SparkGroupLogo} alt="logo" />

                <div className='Signin-section'>

                    <h1 className='heading'>Sign in to your Spark</h1>

                    <div className='input-box'>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className='signin-input'
                            placeholder='Spark/Username'
                            value={formData.username}
                            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                            required
                        />

                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder='Password'
                            className='signin-input'
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            required
                        />

                    </div>

                    <button className='btn-login' type='submit' onClick={handleSubmit} >
                        Log in
                    </button>

                    <p className='signup-link'> 
                        Don't have an account? <span onClick={() => navigate('/signup')} >Sign up</span>
                    </p>

                </div>

                <p className='Login-TnC-description'>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
            </div>

            <div className="Auth-right">
                <img className='auth-frame' src={AuthFrame} alt="banner" />

            </div>
        </div>

    )
}

export default Signin