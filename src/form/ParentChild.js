import React from "react";

/**
 * https://www.runoob.com/react/react-forms-events.html
 */
class Content extends React.Component {

    render() {
        return <div>
            <input type="text" value={this.props.myDataProp} onChange={this.props.updateStateProp}/>
            <h4>Child：{this.props.myDataProp}</h4>
        </div>;
    }
}

class ParentChild extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'Hello Runoob!'};
        // this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    render() {
        var value = this.state.value;
        return <div>
            <h4>Parent：{value}</h4>
            <Content myDataProp={value} updateStateProp={this.handleChange}></Content>
        </div>;
    }
}

export default ParentChild