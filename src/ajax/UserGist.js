import React from "react";

class UserGist extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {username: '', lastGistUrl: ''};
    }


    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div>
                {this.props.username} 用户最新的 Gist 共享地址：{this.props.lastGistUrl}
            </div>
        );
    }
}
export default UserGist
