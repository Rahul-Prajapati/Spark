import { useState } from 'react'
import './SignUpModal.css'
import { useNavigate } from 'react-router-dom';

const SignUpModal = ({errors, closeModal}) => {
    const navigate = useNavigate();
    
    return (
        
            <div className="modal-overlay" onClick={closeModal}>
        
        <div className="modal-container" onClick={(e) => e.stopPropagation()}>

            <form className='form'>

                <div className='form-title'>
                    <h3>Create an account</h3>

                    <p onClick={() => navigate('/signin')}> Sign in instead</p>

                </div>

                <div className='credentials-box'>

                    <label htmlFor="firstname">First name</label>
                    <input />
                    {errors.firstname && <p className="error">{errors.firstname}</p>}

                    <label htmlFor="lastname">Last name</label>
                    <input />
                    {errors.lastname && <p className="error">{errors.lastname}</p>}

                    <label htmlFor="email">Email</label>
                    <input />
                    {errors.email  && <p className="error">{errors.email }</p>}


                    <label htmlFor="password">Password</label>
                    <input />
                    {errors.password  && <p className="error">{errors.password }</p>}

                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input />
                    {errors.confirm_password && <p className="error">{errors.confirm_password}</p>}

                </div>

                <div className='checkbox-div'>
                    <input
                        type="checkbox"
                        checked={!errors.terms} 
                        readOnly
                    />
                    <label htmlFor="terms">
                        By creating an account, I agree to our <span>Terms of use</span>  and <span>Privacy Policy</span>
                    </label>

                    {errors.terms && <p className="error">{errors.terms}</p>}

                </div>

               

                <button className='btn-createAcc'>
                    Create an account
                </button>

            </form>


        </div>

        </div>
    )
}

export default SignUpModal