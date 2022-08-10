import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';
import logo from '../images/favicon.ico';
import { useHistory } from "react-router";


const validate = () => {
    const history = useHistory();
    let e = document.getElementById('email').value;
    let p = document.getElementById('password').value;
    if(p !== "" && e !== "") {
        if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e))) {
            alert("Invalid Email address");
        }
        else {
            history.push("../public/home.html");
        }
    }
    else {
        alert("Both the fileds are mandatory to login");
    }
}

class Login extends Component {
    render() {
        return(
            <div>
                <img className='Logo' src={logo} alt='Logo'></img>
                <div className='boxlogin'>
                <h1>Sign In</h1>
                    <form className='loginbox'>
                        <input type={'text'} className='boxx' placeholder='Email' id='email'></input><br></br><br></br>
                        <input type={'password'} className='boxx' placeholder='Password' id='password'></input><br></br><br></br>
                        <button className='boxxx' onClick={validate}>SIGN IN</button>
                    </form>
                </div>
            </div>
        );
    }
}



export default Login;