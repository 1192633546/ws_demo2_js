import React from "react";
import Es6Demo from "../es6/Es6Demo";

class Clock extends React.Component {
    constructor(props) {
        super(props);
        // date
        this.props = {date: new Date()};
    }

    componentDidMount() {
        this.timerId = setInterval(/**this.tick**/() => this.setState({
                date: new Date()
            }),
            100)
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({date: new Date()});
    }

    render() {
        return (
            <div>
                {/*<h1>当前时间是：{this.props.date.toLocaleTimeString()}</h1>*/}
            </div>
        );
    }

}

function StateDemo () {
    return <div>
        <Clock/>
        <Es6Demo/>
    </div>
}
export default StateDemo