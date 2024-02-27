import { Link } from 'react-router-dom'
import huglogo from '../assets/hugmed_transparent_background.png'
import './Home.css'

function Home() {
    return(
        <>
            <div id="home-container">
                <img className='home-centered-element' id="home-logo" src={huglogo}/>
                <h1 className='home-centered-element'>User Portal</h1>
            </div>
            <div  className='home-centered-element'><Link to='/login'>LOGIN</Link></div>
        </>
    )
}

export default Home