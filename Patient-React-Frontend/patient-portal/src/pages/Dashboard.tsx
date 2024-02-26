import { Outlet } from "react-router-dom"
import './Dashboard.css'
import Navbar from "../components/Navbar"

function Dashboard() {
    return(
        <>
            <p>DASH</p>
            <Navbar/>
            <div id='dashboard-content'>
                <Outlet/>
            </div>
            
        </>
    )
}

export default Dashboard