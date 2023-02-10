import React from "react";

class HelloMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'Hello Runoob!', flag: false, aaaa: "aaaaa"};
    }

    handleChange = (event) => {
        console.log("handleChange:" + this.state.flag)
        console.log("handleChange:target:" + event.target.value)
        if (this.state.flag) {
            this.setState({value: '菜鸟教程:' + this.state.flag, flag: !this.state.flag})
        } else {
            this.setState({value: 'Hello Runoob!:' + this.state.flag, flag: !this.state.flag})
        }

    }

    handleClick = (event) => {
        console.log("handleClick:" + this.state.flag + "")
        console.log("handleClick:target:" + event.target.value)
        if (this.state.flag) {
            this.setState({value: '菜鸟教程:' + this.state.flag, flag: !this.state.flag})
        } else {
            this.setState({value: 'Hello Runoob!:' + this.state.flag, flag: !this.state.flag})
        }

    }

    render() {
        var value = this.state.value;
        var flag = this.state.flag;
        const e1 = <h4>true</h4>
        const e2 = <h4>false</h4>
        return <div>
            <button onClick={(e) => this.handleClick(e)} value={this.state.aaaa}>点我</button>
            <input onChange={this.handleChange}/>
            <h4>{value}</h4>
            <h4>{this.state.aaaa}</h4>
            <h4>{flag ? e1 : e2}</h4>
        </div>;
    }
}

export default HelloMessage;