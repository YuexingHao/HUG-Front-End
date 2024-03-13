import { Outlet } from "react-router-dom"
import './Dashboard.css'
import Navbar from "../components/Navbar"

import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

function Dashboard() {
    return(
        <>
        <Authenticator>
            {({signOut, user}) => (
                
                <>
                    <Navbar/>
                    
                    <div id='dashboard-content'>
                        <h1>Hello {user.username}</h1>
                        <button onClick={signOut}>Logout</button>
                        <Outlet/>
                    </div>
                </>
            )}
        </Authenticator>
        </>
    )
}

export default Dashboard