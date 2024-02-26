import { useState } from 'react'
import hugmedlogo from '../assets/hugmed_transparent_background.png'
import './Login.css'
import { Navigate, useNavigate } from 'react-router-dom'



function Login() {
    const [submitted, setSubmitted] = useState(false)
    const navigate = useNavigate();

    const handlesubmit = (event: any) => {
        // Stop form from auto-refreshing page
        event.preventDefault(); 
        
        if (!submitted) {
            setSubmitted(true)
            navigate('/dashboard')
        }
    }


    return(
        <>
        <div id='login-container'>
            <img src={hugmedlogo} />
            <form onSubmit={handlesubmit}>
                <input type='text' value="username"/>
                <input type='text' value="password"/>
                <input type='submit' value="Submit"/>
            </form>
            
        </div>
        </>
    )
}

export default Login