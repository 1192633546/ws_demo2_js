import React from "react";
import PropTypes from "prop-types";

class WebSite extends React.Component {
    render() {
        return (
            <div>
                <Name name={this.props.name}></Name>
                <Link link={this.props.link}></Link>
                <MyTitle title={title}></MyTitle>
            </div>
        );
    }
}
var title = "菜鸟教程";
// var title = 123;
class MyTitle extends React.Component {
    render() {
        return (
            <h1>Hello, {this.props.title}</h1>
        );
    }
}

// MyTitle.propTypes = {
//     title: PropTypes.string
// };

class Name extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
            </div>
        );
    }
}

class Link extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.link}</h1>
            </div>
        );
    }
}

export default WebSite