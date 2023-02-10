import React from "react";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {temperature: ""}
    }

    handleChange(event) {
        console.log("handleChange:" + event.target)
        this.setState({temperature: event.target.value})
    }

    handleClick(event) {
        var value = event.target.value;
        console.log("handleClick:" + value)
        if (value == NaN || value == "") {
            event.preventDefault();
        } else {
            alert(event.target.value)
        }
    }

    render() {
        const temperature = this.state.temperature;
        return (
            <div>
                <fieldset>
                    <legend> Enter temperature in Celsius:</legend>
                    <input value={temperature} onChange={this.handleChange}/>
                    <BoilingVerdict celsius={parseFloat(temperature)}></BoilingVerdict>
                    <div style={{marginTop: 120, background: "0xff0000"}}>
                        <fieldset>
                            <button onClick={(event) => this.handleClick(event)} value={temperature}>onClick</button>
                        </fieldset>
                        <fieldset>
                            <button onClick={this.handleClick} value={temperature}>onClick</button>
                        </fieldset>
                    </div>

                </fieldset>

            </div>
        );
    }


}

/**
 * 动态更新显示
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function BoilingVerdict(props) {
    console.log("BoilingVerdict：" + props.celsius)
    if (props.celsius >= 100) {
        return <p className={"Form_boil"} style={{color: "#ff0000"}}>The water would boil.</p>;
    } else {
        return <p className={"Form_not_boil"} style={{color: "#000000"}}>The water would not boil.</p>;
    }
}

class FlavorForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {value: "coconut"}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert("你选择的是：" + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>选择你喜欢的选项</h1>
                <form onSubmit={this.handleSubmit}>
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value={"graperfruit"}>葡萄柚</option>
                        <option value={"lime"}>酸橙</option>
                        <option value={"coconut"}>椰子</option>
                        <option value={"mango"}>芒果</option>
                    </select>
                    <input type={"submit"} value={"提交"}/>

                </form>


            </div>
        );
    }

}


class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ""}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    handleSubmit(event) {
        alert("name:" + this.state.value);
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>名字：
                    </label>
                    <input type={"text"} value={this.state.value} onChange={this.handleChange}/>
                    <input type={"submit"} value={"提交"}/>
                </form>
            </div>
        )
    }
}

function Form() {
    return (
        <div>
            <NameForm></NameForm>
            <FlavorForm></FlavorForm>
            <Calculator>Calculator</Calculator>
        </div>
    )
}


export default Form;