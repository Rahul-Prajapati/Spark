import SparkGroupLogo from '../assets/SparkGroupLogo.png'
import AuthFrame from '../assets/AuthFrame.png'
import './AuthenticationPage.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import SignUpModal from './SignUpModal'

const AuthenticationPage = () => {
    const navigate = useNavigate();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirm_password: "",
        terms: false
    })

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const { firstname, lastname, email, password, confirm_password } = formData;

        let newErrors = {};

        if (firstname.trim().length === 0) {
            newErrors.firstname = "First name is required*"
        }

        if (lastname.trim().length === 0) {
            newErrors.lastname = "Last name is required*"
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required*";
          } else if (!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
            newErrors.email = "Invalid Email*";
        }

        if (!formData.password) {
            newErrors.password = "Please enter your password*";
          } else if (formData.password.length < 8) {
            newErrors.password = "Password must be at least 8 characters*";
          } else if (!/(?=.*[a-z])/.test(formData.password)) {
            newErrors.password = "At least 1 lowercase letter required*";
          } else if (!/(?=.*[A-Z])/.test(formData.password)) {
            newErrors.password = "At least 1 uppercase letter required*";
          } else if (!/(?=.*\d)/.test(formData.password)) {
            newErrors.password = "At least 1 number required*";
          } else if (!/(?=.*[@#$%^&*!])/.test(formData.password)) {
            newErrors.password = "At least 1 special character (@#$%^&*!)*";
          }

        if (!formData.confirm_password) {
            newErrors.confirm_password = "Confirm password is required*";
          } else if (formData.password !== formData.confirm_password) {
            newErrors.confirm_password = "The Password you entered does not match*";
        }

        if (!formData.terms) newErrors.terms = "You must agree to the terms*";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleSignup = async () => {
        const { firstname, lastname, email, password, confirm_password } = formData;
        const response = await fetch(`${import.meta.env.VITE_SERVER_API}/api/auth/signup`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ firstname, lastname, email, password }),
        });
        
        const data = await response.json();
        if (data.token) {
            toast.success("Account created successfully")
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          navigate('/aboutyourself');
        //   window.location.href = "/profile";
        } else {
            toast.error("Something went wrong")
        }
      };
      


    const handleSubmit = (e) => {
        e.preventDefault();
        setIsModalOpen(false)

        if (validateForm()) {
            handleSignup();
            console.log("Form submitted successfully", formData);
            setErrors({});
            // navigate('/dashboard');
        } else {
            setIsModalOpen(true)
        }

  

    }


    return (
        <div className="Auth-Container">

            <div className="Auth-left">
                <img className='sparkLogo' src={SparkGroupLogo} alt="logo" />

                <div className='Signup-section'>

                    <h1 className='heading'>Sign up to your Spark</h1>

                    <div className='Signup-form'>



                        <form className='form' onSubmit={handleSubmit}>

                            <div className='form-title'>
                                <h3>Create an account</h3>

                                <p onClick={() => navigate('/signin')}> Sign in instead</p>

                            </div>

                            <div className='credentials-box'>

                                <label htmlFor="firstname">First name</label>
                                <input
                                    type="text"
                                    id="firstname"
                                    name="firstname"
                                    className='signup-input'
                                    value={formData.firstname}
                                    onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
                                    required
                                />




                                <label htmlFor="lastname">Last name</label>
                                <input
                                    type="text"
                                    id="lastname"
                                    name="lastname"
                                    className='signup-input'
                                    value={formData.lastname}
                                    onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
                                    required
                                />

                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className='signup-input'
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                />


                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className='signup-input'
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    required
                                />

                                <label htmlFor="confirm-password">Confirm Password</label>
                                <input
                                    type="password"
                                    id="confirm-password"
                                    name="confirm_password"
                                    className='signup-input'
                                    value={formData.confirm_password}
                                    onChange={(e) => setFormData({ ...formData, confirm_password: e.target.value })}
                                    required
                                />

                            </div>

                            <div className='checkbox-div'>
                                <input
                                    type="checkbox"
                                    name="terms"
                                    id="terms"
                                    className='signup-input'
                                    checked={formData.terms}
                                    onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
                                />
                                <label htmlFor="terms">
                                    By creating an account, I agree to our <span>Terms of use</span>  and <span>Privacy Policy</span>
                                </label>

                            </div>

                            <button className='btn-createAcc' type='submit'>
                                Create an account
                            </button>

                        </form>

                    </div>




                </div>

                <p className='TnC-description'>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>


            </div>

            <div className="Auth-right">
                <img className='auth-frame' src={AuthFrame} alt="banner" />

            </div>

            {isModalOpen &&  <SignUpModal errors={errors} closeModal={() => setIsModalOpen(false)} /> }

        </div>
    )
}

export default AuthenticationPage