// Write your JS code here
import {withRouter} from "react-router-dom"
import Header from "../Header"
import LogoutButton from '../LogoutButton'
import './index.css'

const Home = () => {
    
    return(
        <>
        <Header/>
        <div className='home-container'>
            <h1> Home Route </h1>
            <LogoutButton />
        </div>
        </>
    )
}

export default Home