import React from "react";

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
            AAAA: false
        };
        // 为了在回调中使用 `this`，这个绑定是必不可少的
        // this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn,
        }));
    }

    render() {
        return (
            <div>
                <h1>This is Toggle </h1>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ONONONON' : 'OFFOFFOFFOFF'}
                </button>
                <h1>hhh1:{this.state.AAAA}</h1>
                <LoggingButton0></LoggingButton0>
                <LoggingButton></LoggingButton>
                <LoggingButton2></LoggingButton2>
            </div>
        );
    }
}

class LoggingButton0 extends React.Component {
    constructor() {
        super();
        //这个语法确保了 `this` 绑定在 handleClick 中
        // 这里只是一个测试
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
        console.log('this is:', this);
        alert("this.handleClick=this.handleClick.bind(this);")
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                    this.handleClick=this.handleClick.bind(this);
                </button>
            </div>
        );
    }
}

class LoggingButton extends React.Component {
    // 这个语法确保了 `this` 绑定在  handleClick 中
    // 这里只是一个测试
    handleClick = () => {
        console.log('this is:', this);
        alert("// 这个语法确保了 `this` 绑定在  handleClick 中\n" +
            "// 这里只是一个测试")
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                    //这个语法确保了 `this` 绑定在 handleClick 中
                    // 这里只是一个测试
                </button>
            </div>
        );
    }
}

class LoggingButton2 extends React.Component {
    // 这个语法确保了 `this` 绑定在  handleClick 中
    // 这里只是一个测试
    handleClick = (e) => {
        console.log('this is:', this);
        alert(e)
    }


    render() {
        return (
            <div>
                <button onClick={(e) => this.handleClick(e)}>
                    //这个语法确保了 `this` 绑定在 handleClick 中
                    // 这里只是一个测试
                </button>
            </div>
        );
    }
}


export default Toggle