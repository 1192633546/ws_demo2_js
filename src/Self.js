import logo from './logo.svg';
import './Self.css';
import React from 'react';
import {Button, Space} from "antd";
import {Pagination} from 'antd';
import App from "./App";

function Self() {
    return (
        <div className={"Self"}>
            <h1>Self.js</h1>
            <MailBox unreadMessages={messages}></MailBox>
        </div>
    )
}

const messages = ["React", "Re:React", "Re:Re:React"]

function MailBox(props) {
    const unreadMessages = props.unreadMessages;
    const h2 = <h2>
        You have {unreadMessages.length} unread messages.
    </h2>
    return (
        <div>
            <h1>Hello!</h1>
            {unreadMessages.length > 0 && h2}
            <Page></Page>
        </div>
    )
}

function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }

    return (
        <div className="warning">
            Warning!
        </div>
    );
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showWarning: false};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(state => ({
            showWarning: !state.showWarning
        }));
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning}/>
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        );
    }
}

export default Self;