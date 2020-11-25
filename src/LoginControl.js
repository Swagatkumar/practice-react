import React, { Component } from 'react';

class LoginControl extends Component {
    constructor(props){
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {
            isLoggedIn: false
        }
    }

    handleLoginClick(){
        this.setState({
            isLoggedIn: true
        });
    }

    handleLogoutClick(){
        this.setState({
            isLoggedIn: false
        });
    }
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if(isLoggedIn){
            button = <LogoutButton onClick={this.handleLogoutClick}/>
        }else{
            button = <LoginButton onClick={this.handleLoginClick} />
        }
        
        return (
            <div>
                <Greetings isLogin={isLoggedIn}/>
                {button}
            </div>
        );
    }
}

function UserGreetings(props){
    return <h1>Welcome Back</h1>
}

function GuestGreetings(props){
    return <h1>Please Login</h1>
}

function LoginButton(props){
    return <button onClick={props.onClick}>
        Login
    </button>
}

function LogoutButton(props){
    return <button onClick={props.onClick}>
        Logout
    </button>
}

function Greetings(props){
    const isLogin = props.isLogin;
    if(isLogin){
        return <UserGreetings/>
    }else{
        return <GuestGreetings/>
    }
}
export default LoginControl;