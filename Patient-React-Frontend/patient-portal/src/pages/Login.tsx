import { useState } from 'react'
import hugmedlogo from '../assets/hugmed_transparent_background.png'
import './Login.css'
import AuthService from "../service/AuthService"
import Error from "../service/ErrorFunc"
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const loginAPIUrl = "https://ynhkb7n69a.execute-api.us-east-2.amazonaws.com/prod/login";
const error_obj = new Error();

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handlesubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        if (username.trim() === '' || password.trim() === '') {
            error_obj.showError('Both username and password are required');
            return;
        }
        error_obj.clearError();
        const requestConfig = {
            headers: {
                'x-api-key': 'mMCFAP4dit3GswPwh9Gsu16qykYEDtjU3g2bP6yA'
            }
        }
        const requestBody = {
            username: username,
            password: password
        }

        axios.post(loginAPIUrl, requestBody, requestConfig).then((response) => {
            const auth_service = new AuthService();
            auth_service.setUserSession(response.data.user, response.data.token);
            navigate('/dashboard');
        }).catch((error) => {
            if (error.response.status === 401 || error.response.status === 403) {
                error_obj.showError(error.response.data.message);
            } else {
                error_obj.showError('sorry....the backend server is down. please try again later!!');
            }
        })
    }

    return (
        <>
            <div id='login-container'>
                <div id='login-box'>
                    <img src={hugmedlogo} />
                    {/* Will need to change this to a RR-Dom <Form> tag some point later */}
                    <form onSubmit={handlesubmit}>
                        username: <input className='input' type='text' value={username} onChange={event => setUsername(event.target.value)} />
                        password: <input className='input' type='password' value={password} onChange={event => setPassword(event.target.value)} />
                        <input className='input' type='submit' value="Submit" />
                    </form>
                    <div id="errorContainer"></div>
                </div>
            </div>
        </>
    )
}

export default Login;