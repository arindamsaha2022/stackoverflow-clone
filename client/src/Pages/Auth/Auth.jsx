import React, { useState } from 'react';
import './auth.css';
import icon from '../../assets/icon.png';
import logo from '../../assets/logo.png';
import AboutAuth from './AboutAuth';
import { signup, login } from '../../actions/auth';
import { useDispatch } from 'react-redux';  
import { useNavigate } from 'react-router-dom';  


const Auth = () => {
    const [isSignup, setIsSignup] = useState(true); 
    const [name, setName]= useState('')
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSwitch = () => {
        setIsSignup(!isSignup)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!email && !password) {
            alert('Enter email and password');
            return;
        }

        if (isSignup){
            if (!name) {
                alert("Enter a name to continue");
                return;
            }
            dispatch(signup({ name, email, password }, navigate));
        } else {
            dispatch(login({ email, password }, navigate));
        }
        
        
    }


    return (
        <section className="auth-section">
          {isSignup && <AboutAuth />}

            <div className='auth-container-2'>               
                { isSignup ?  <img src={logo}  alt='stack overflow clone' className="login-logo" style={{ width: '200px', height: '75px' }}/>: <img src={icon}  alt='stack overflow clone' className="login-logo" style={{ width: '75px', height: '75px' }}/> }
                <form onSubmit={handleSubmit}>
                    {
                        isSignup  ?
                        <label htmlFor='name'>
                             <h4>Display Name</h4>
                             <input type='text' id='name' name='name' onChange={(e)=>{setName(e.target.value)}}/>
                        </label>:null
                    } 
                    <label htmlFor="email">
                        <h4>Email</h4>
                        <input type='email' name='email' id='email'onChange={(e)=>{setEmail(e.target.value)}}/> 
                    </label>
                    <label htmlFor="password">
                        <div style={{display:'flex', justifyContent:'space-between' , color: "#007ac6", fontSize:"14px"}}>
                            <h4>Password</h4> 
                            {isSignup? null: <p>Forgot password?</p>}
                        </div>
                        <input type='password' name='password' id='password' autoComplete="on" onChange={(e)=>{setPassword(e.target.value)}}/>
                        {isSignup ? <p style={{ color: "#666767", fontSize:"13px"}}>Passwords must contain at least eight<br />characters, including at least 1 letter and 1<br /> number.</p>: null}
                        {
                            isSignup ? (
                                <label htmlFor="check">
                                    <input type="checkbox" id='check' style={{width:'13px', margin:'13px'}}  />
                                    <p style={{ fontSize:"13px" }}>Opt-in to receive occasional,<br />product updates, user research invitations,<br />company announcements, and digests.</p>
                                </label>
                            ):null
                        }
                    </label>
                    <button type='submit' className='auth-btn'>
                        {isSignup ? 'Sign up' : 'Log in'} 
                    </button>
                    {
                        isSignup ? (
                            <p style={{ color: "#666767", fontSize:"13px"}}>
                                By clicking “Sign up”, you agree to our 
                                <span style={{ color: "#007ac6"}}> terms of<br /> service</span>,
                                <span style={{ color: "#007ac6"}}> privacy policy</span> and 
                                <span style={{ color: "#007ac6"}}> cookie policy</span>
                            </p>
                        ):null

                    }
                </form>
                <p>
                    {isSignup ? 'Already have an account?' : "Don't have an account?"}
                    <button type='button' className='handle-switch-btn' onClick={handleSwitch}>
                        {isSignup ? "Log in" : "Sign up"}
                    </button>
                </p>
            </div>
        </section>
    );
}

export default Auth;