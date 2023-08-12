// Write your JS code here
import {Component} from 'react'
import {withRouter, Redirect} from "react-router-dom"
import Cookies from 'js-cookie'
import './index.css'

class LoginForm extends Component {

    onSucessLogin = jwtToken => {
        const {history} = this.props
        
        Cookies.set("jwt_token", jwtToken, {expires: 30})
        history.replace("/")
    }

    login = async() => {
        const userDetails = {
            username: "rahul",
            password: "rahul@2021"
        }
        const url = "https://apis.ccbp.in/login"
        const options = {
            method: "POST",
            body: JSON.stringify(userDetails)
        }

        const response = await fetch(url, options)
        const data = await response.json()

       if (response.ok === true){
            this.onSucessLogin(data.jwt_token)
       }
    }

    render(){
        const jwtToken = Cookies.get("jwt_token")
        if (jwtToken !== undefined){
            return <Redirect to="/"/>
        }
        return(
            <div className="login-container">
                <h1 className="heading"> Please Login </h1>
                <button onClick={this.login}> Login with Sample Creds </button>
            </div>
        )
    }
}

export default withRouter(LoginForm)