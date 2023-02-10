import logo from './logo.svg';
import style from './App.css';
import React, {Component} from 'react';
import {Button, Space} from "antd";
import {render} from "@testing-library/react";
import Toggle from "./event/Toggle";
import LoginControl from "./event/LoginControl";

const obj = {};

function doSomething(o) {
    o.x = 1;
    o.name = 2;
    o.y = 12;
}

doSomething(obj);
console.log(obj.x); // 1


function App() {
    return (
        <div className={style.App}>
            <h1>{navigator.userAgent}</h1>
            <HeadFun></HeadFun>
            <body className="body">
            <Square name={"name is Square"}></Square>
            <Welcome name={"tom"}></Welcome>
            <Clock></Clock>
            <Clock3 date={new Date()}></Clock3>
            <Toggle></Toggle>
            <LoggingButton></LoggingButton>
            <Space wrap>
                <Button type="primary">Primary Button</Button>
                <Button>Default Button</Button>
                <Button type="dashed">Dashed Button</Button>
                <Button type="text">Text Button</Button>
                <Button type="link">Link Button</Button>
            </Space>
            <Greeting isLogin={false}></Greeting>
            </body>
        </div>
    );
}

class HeadFun extends React.Component {
    render() {
        return (
            <div className={"headcls"}>
                <h1>This is Header cls</h1>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>

                </header>
            </div>
        );
    }

}

function UserGreeting(props) {
    return <h1>Welcomde back.</h1>
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

function Greeting(props) {
    const isLogin = props.isLogin;
    if (isLogin) {
        return UserGreeting(props)
    } else {
        return GuestGreeting(props);
    }

}

class LoggingButton extends React.Component {
    // This syntax ensures `this` is bound within handleClick.
    handleClick = () => {
        console.log('this is:', this);
        alert("this is :" + this)
    };
    showAlart = () => {
        alert("this is showAlart:" + this)
    }

    show() {
        alert("this is showAlart:" + this)
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                    Click me handleClick
                </button>
                <br/>
                <button onClick={this.showAlart}>
                    Click me showAlart
                </button>
                <button onClick={() => this.show()}>
                    Click me show()
                </button>
                <button>
                </button>
            </div>
        );
    }
}


class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({date: new Date()});
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleDateString()} {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

class Clock3 extends React.Component {
    render() {
        return (
            <div>
                <h1>Hi World.</h1>
                <h2>
                    dateTime:{this.props.date.toLocaleTimeString()}
                </h2>
            </div>
        );
    }
}

class Welcome extends React.Component {
    render() {
        return <h1>Hello,{this.props.name}</h1>
    }
}

class Person {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        return "Hello , I am ${this.name}"
    }
}

const p = new Person("Maria");
console.log(p.sayHello());

class Square extends React.Component {
    render() {
        return (
            <button className="App-Square">
                {this.props.name}
            </button>
        );
    }
}

export default App;
