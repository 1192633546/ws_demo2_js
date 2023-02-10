import React from "react";

export class MyComponent extends React.Component {
    constructor() {
        super();
        this.state = {name: "--"}
    }

    handleClick = (event) => {
        // 使用原生的 DOM API 获取焦点
        this.refs.myInput.focus();
        this.setState({name: this.state.name})
    }

    render() {
        //  当组件插入到 DOM 后，ref 属性添加一个组件的引用于到 this.refs
        return (
            <div>
                <input type="text" ref="myInput" onChange={this.handleClick}/>
                <h1>{this.state.name}</h1>
                <input type="button" value="点我输入框获取焦点" onClick={this.handleClick}
                />
            </div>
        );
    }
}