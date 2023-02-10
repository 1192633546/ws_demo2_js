import React from "react";

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
        console.log("constructor")
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
        console.log("isLoggedIn "+this.state.isLoggedIn)
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
        console.log("handleLogoutClick "+this.state.isLoggedIn)
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick}/>;
        } else {
            button = <LoginButton onClick={this.handleLoginClick}/>;
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn}/>
                {button}
            </div>
        );
    }
}

function UserGreeting(props) {
    console.log("欢迎回来 ");
    return <h1>欢迎回来!</h1>;
}

function GuestGreeting(props) {
    console.log("请先注册 ");
    return <h1>请先注册。</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    console.log("Greeting "+isLoggedIn);
    if (isLoggedIn) {
        return <UserGreeting/>;
    }
    return <GuestGreeting/>;
}

function LoginButton(props) {
    console.log("LoginButton "+props.isLoggedIn);
    return (
        <button onClick={props.onClick}>
            登陆  登陆 登陆 登陆 登陆 登陆
        </button>
    );
}

function LogoutButton(props) {
    console.log("LogoutButton "+props.isLoggedIn);
    return (
        <button onClick={props.onClick}>
            退出 退出 退出 退出 退出
        </button>
    );
}

export default LoginControl
