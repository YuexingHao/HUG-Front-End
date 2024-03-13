// import { Link } from 'react-router-dom'
// import huglogo from '../assets/hugmed_transparent_background.png'
// import { useState, useEffect } from "react";
// import './Home.css'
// import AuthService from "../service/AuthService";
// import axios from "axios";

// const verifyTokenAPIURL = 'https://ynhkb7n69a.execute-api.us-east-2.amazonaws.com/prod/verify';
// const auth_service = new AuthService();

// function Home() {
//     const [isAuthenicating, setAuthenicating] = useState(true);

//     useEffect(() => {
//         const token = auth_service.getToken();
//         if (token === 'undefined' || token === undefined || token === null || !token) {
//             return;
//         }

//         const requestConfig = {
//             headers: {
//                 'x-api-key': 'mMCFAP4dit3GswPwh9Gsu16qykYEDtjU3g2bP6yA'
//             }
//         }
//         const requestBody = {
//             user: auth_service.getUser(),
//             token: token
//         }

//         axios.post(verifyTokenAPIURL, requestBody, requestConfig).then(response => {
//             auth_service.setUserSession(response.data.user, response.data.token);
//             setAuthenicating(false);
//         }).catch(() => {
//             auth_service.resetUserSession();
//             setAuthenicating(false);
//         })
//     }, []);

//     const token = auth_service.getToken();
//     if (isAuthenicating && token) {
//         return <div className="content">Authenicating...</div>
//     }


//     return (
//         <>
//             <div id="home-container">
//                 <img className='home-centered-element' id="home-logo" src={huglogo} />
//                 <h1 className='home-centered-element'>User Portal</h1>
//             </div>
//             <div className='home-centered-element'><Link to='/login'>LOGIN</Link></div>
//             <div className='home-centered-element'><Link to='/register'>REGISTER</Link></div>
//         </>
//     )
// }

// export default Home

import { Link } from 'react-router-dom'
import huglogo from '../assets/hugmed_transparent_background.png'
import './Home.css'

function Home() {
    const cognitourl: string = import.meta.env.VITE_COGNITO_PORTAL
    return(
        <>
            <div id="home-container">
                <img className='home-centered-element' id="home-logo" src={huglogo}/>
                <h1 className='home-centered-element'>User Portal</h1>
            </div>
            {/* need to move login link to .env */}
            <div  className='home-centered-element'><Link to='/dashboard'>LOGIN</Link></div>
        </>
    )
}

export default Home