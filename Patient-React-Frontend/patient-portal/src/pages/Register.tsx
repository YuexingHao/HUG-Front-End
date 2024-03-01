import { useState } from 'react';
import axios from 'axios';
import Error from "../service/ErrorFunc"

const registerUrl = 'https://ynhkb7n69a.execute-api.us-east-2.amazonaws.com/prod/register';
const error_obj = new Error();

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handlesubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        if (username.trim() === '' || email.trim() === '' || name.trim() === '' || password.trim() === '') {
            console.log('come into all-required part')
            error_obj.showError('All fields are required');
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
            email: email,
            name: name,
            password: password
        }
        axios.post(registerUrl, requestBody, requestConfig).then(() => {
            error_obj.showError('Registeration Successful');
        }).catch((error) => {
            if (error.response.status === 401 || error.response.status === 403) {
                error_obj.showError(error.response.data.message);
            } else {
                error_obj.showError('sorry....the backend server is down!! please try again later');
            }
        })
    }

    return (
        <div>
            <form onSubmit={handlesubmit}>
                <h5>Register</h5>
                name: <input type="text" value={name} onChange={event => setName(event.target.value)} /> <br />
                email: <input type="text" value={email} onChange={event => setEmail(event.target.value)} /> <br />
                username: <input type="text" value={username} onChange={event => setUsername(event.target.value)} /> <br />
                password: <input type="text" value={password} onChange={event => setPassword(event.target.value)} /> <br />
                <input type="submit" value="Register" />
            </form>
            <div id="errorContainer"></div>
        </div>
    )
}

export default Register;