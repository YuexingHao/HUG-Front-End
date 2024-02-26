import { Link } from 'react-router-dom'
import huglogo from '../assets/hugmed_transparent_background.png'
import './Home.css'

function Home() {
    return(
        <>
            <div id="home-container">
                <img id="logo" src={huglogo}/>
                <h1 style={{display:'block', margin:'auto'}}>User Portal</h1>
            </div>
            <Link to='/login'>LOGIN</Link>
        </>
    )
}

export default Home