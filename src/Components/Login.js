import React, { Component } from 'react'
import { connect } from "react-redux"
import {signIn }from "../store/actions/authActions"
import {Redirect } from "react-router-dom"

export class Login extends Component {
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
        const {loggedIn}= this.props;

        if(loggedIn) {
            return(
                <Redirect to="/"/>
            )
        }
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink">Sign In</button>

                    </div>
                </form>
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
