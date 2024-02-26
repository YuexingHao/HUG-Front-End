import './Navbar.css'
import huglogo from '../assets/hugmed_transparent_background.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
    const [header, updateHeader] = useState("Dashboard")

    const header_updater = (e: any) => {
        // e is of type React.MouseEvent<HTMLButtonElement, MouseEvent>
        // but strictly typing it that way causes an IDE red-line under 'value': "Property 'value' does not exist on type 'EventTarget'"
        
        // Update <h1> 'dash-header' with the value of the button clicked
        updateHeader(e.target.value)
    }
    
    return(
        <>
        <div id="navbar-container">
            <div id="heading">
                <img id="dash-logo" src={huglogo}></img>
                <h1 id="dash-header">{header}</h1>
            </div>
            <Link to="/dashboard">
                <button onClick={(e) => {header_updater(e)}} value="Dashboard" className="navbar-button">Dashboard</button>
            </Link>
            <Link to="/dashboard/report">
                <button onClick={(e) => {header_updater(e)}} value="Report" className="navbar-button">Report</button>
            </Link>
            <Link to="/dashboard/settings">
                <button onClick={(e) => {header_updater(e)}} value="Settings" className="navbar-button">Settings</button>
            </Link>
        </div>
        </>
    )
}

export default Navbar