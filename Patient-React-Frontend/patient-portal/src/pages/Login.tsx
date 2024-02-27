import { useState } from 'react'
import hugmedlogo from '../assets/hugmed_transparent_background.png'
import './Login.css'
import { useNavigate } from 'react-router-dom'



function Login() {
    const [submitted, setSubmitted] = useState(false)
    const navigate = useNavigate();

    const handlesubmit = (event: any) => {
        // Stop form from auto-refreshing page
        event.preventDefault(); 

        if (!submitted) {
            setSubmitted(true)
            // redirect to dashboard on successful login
            navigate('/dashboard')
        }
    }


    return(
        <>
        <div id='login-container'>
            <div id='login-box'>
                <img src={hugmedlogo} />
                {/* Will need to change this to a RR-Dom <Form> tag some point later */}
                <form onSubmit={handlesubmit}>
                    <input className='input' type='text' value="username"/>
                    <input className='input' type='text' value="password"/>
                    <input className='input' type='submit' value="Submit"/>
                </form>
            </div>
        </div>
        </>
    )
}

export default Login