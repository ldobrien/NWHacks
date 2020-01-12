import React, { Component } from 'react'
import { connect } from "react-redux"
import {signIn }from "../store/actions/authActions"
import logo from '../images/logo.png';
import op from '../images/op.png';
import './Login.css'
import Box from "@material-ui/core/Box";

class Login extends Component {
    state = {
        username: null,
        password: null
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        return(
            <div className="container">
            {/* <h1 className="black-text center">Welcome to OpBuddy</h1> */}
            <Box display="flex" justifyContent="center" className="container">
                <div id="logo"><img src={logo} alt="Logo" /></div>
            </Box>
            {/* <h4 className="grey-text center">Please Log In</h4> */}
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <input type="text" id="username" onChange={this.handleChange} placeholder="Username"/>
                    </div>
                    <div className="input-field">
                        <input type="password" id="password" onChange={this.handleChange} placeholder="Password"/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink">Sign In</button>

                    </div>
                </form>
                <div id="logo2" className="right" ><img src={op} alt="Op" /></div>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        loggedIn: state.auth.loggedIn
    }
}
const mapDispatchtoProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(Login)
