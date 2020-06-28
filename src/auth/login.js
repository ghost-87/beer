import React, { Component } from 'react';
import fire from './fire';
import '../css/Login.css';

class Login extends Component{

    constructor(props){
        super(props)
        this.login=this.login.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.signUp=this.signUp.bind(this);
            this.state={
                email:"",
                password:"",
        }
    }

    login(e){
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
            console.log(u.a);
            // if(u.a===null){
            //     alert("Your email is not registered. Please Register");
            // } else{
            //     // alert(u.code);
            // }
        }).catch((err)=>{
            console.log(err);
        })
    }

    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    signUp(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
            console.log(u);
        }).catch((err)=>{
            console.log(err);
        })
    }


    render(){
        return(
            <div className="loginHeader">
                <form>
                    <div className="email">
                        <input
                            type="email"
                            placeholder="enter your email"
                            id="email"
                            name="email"
                            onChange={this.handleChange}
                            value={this.state.email}
                        />
                    </div>
                    <div className="password">
                        <input
                            type="password"
                            placeholder="enter your password"
                            id="password"
                            name="password"
                            onChange={this.handleChange}
                            value={this.state.password}
                        />
                    </div>
                    <div className="button">
                        <button onClick={this.login}>Login</button>
                    </div>
                    <div className="button">
                        <button onClick={this.signUp}>Register</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;