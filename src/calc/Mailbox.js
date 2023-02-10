import React from "react";

class Mailbox extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    handleClick() {
        alert("handleClick")
    }

    render() {
        const unreadMessages = this.props.unreadMessages;
        for (let i = 0; i < unreadMessages.length; i++) {
            console.log("unreadMessages " + unreadMessages[i])
        }
        return (
            <div>
                <h1>Hello!</h1>
                <div>
                    <button onClick={this.handleClick}>onclick</button>
                </div>
                {unreadMessages.length >= 0 &&
                    <h2>
                        您有 {unreadMessages.length} 条未读信息。
                    </h2>
                }
            </div>
        );
    }
}

const unreadMessages = ['React', 'Re: React', 'Re:Re: React'];

function Mailbox11() {
    return <div>
        <Mailbox unreadMessages={unreadMessages}></Mailbox>
    </div>
}

export default Mailbox11