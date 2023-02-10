import React from "react";

function Form() {
    return (
        <div>
            <Form_o></Form_o>
            <NameForm></NameForm>
            <textarea>Hi 这个是在Text area 里面的文本</textarea>
            <FlavorForm></FlavorForm>
            <Calculator>Calculator</Calculator>
            <GetIp></GetIp>
            <SplitPane
                left={<Contacts/>}
                right={<Chat/>}
            ></SplitPane>
        </div>
    )
}

function Contacts() {
    return (
        <div>Contacts:</div>
    )
}

function Chat() {
    return (
        <div>Chat:</div>
    )
}

// 组合关系
function SplitPane(props) {
    return (
        <div className={"SplitPane"}>
            <div className={"SplitPane-left"}>{props.left}</div>
            <div className={"SplitPane-right"}>{props.right}</div>
        </div>
    )
}

function GetIp() {
    return (
        <div>
            <h1> getIp:{}</h1>
        </div>
    )
}


const GetIPs = (callback) => {
    var ip_dups = {};
    var RTCPeerConnection = window.RTCPeerConnection
        || window.mozRTCPeerConnection
        || window.webkitRTCPeerConnection;
    var useWebKit = !!window.webkitRTCPeerConnection;
    var mediaConstraints = {
        optional: [{RtpDataChannels: true}]
    };
    // 这里就是需要的ICEServer了
    var servers = {
        iceServers: [
            {urls: "stun:stun.services.mozilla.com"},
            {urls: "stun:stun.l.google.com:19302"},
        ]
    };
    var pc = new RTCPeerConnection(servers, mediaConstraints);

    function handleCandidate(candidate) {
        var ip_regex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/
        var hasIp = ip_regex.exec(candidate)
        if (hasIp) {
            var ip_addr = ip_regex.exec(candidate)[1];
            if (ip_dups[ip_addr] === undefined)
                callback(ip_addr);
            ip_dups[ip_addr] = true;
        }
    }

    // 网络协商的过程
    pc.onicecandidate = function (ice) {
        if (ice.candidate) {
            handleCandidate(ice.candidate.candidate);
        }
    };
    pc.createDataChannel("");
    //创建一个SDP(session description protocol)会话描述协议 是一个纯文本信息 包含了媒体和网络协商的信息
    pc.createOffer(function (result) {
        pc.setLocalDescription(result, function () {
        }, function () {
        });
    }, function () {
    });
    setTimeout(function () {
        var lines = pc.localDescription.sdp.split('\n');
        lines.forEach(function (line) {
            if (line.indexOf('a=candidate:') === 0)
                handleCandidate(line);
        });
    }, 1000);
}

function BoilingVerdict(props) {
    // const boil = <p className={"Form_boil"}>The water would boil.</p>;
    // const not_boil = <p className={"Form_not_boil"}>The water would not boil.</p>;
    if (props.celsius >= 100) {
        return <p className={"Form_boil"}>The water would boil.</p>;
    } else {
        return <p className={"Form_not_boil"}>The water would not boil.</p>;
    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {temperature: ""}
    }

    handleChange(event) {
        this.setState({temperature: event.target.value})
    }

    onSubmit(event) {
        const temperature = this.state.temperature;
        if (temperature >= 100) {
            alert("onSubmit success! boil " + this.state.temperature)
        } else {
            alert("onSubmit success! not boil " + this.state.temperature)
        }
    }

    render() {
        const temperature = this.state.temperature;
        return (
            <div>
                <fieldset>
                    <legend> Enter temperature in Celsius:</legend>
                    <input value={temperature} onChange={this.handleChange}/>
                    <input type={"submit"} value={"提交"} onClick={this.onSubmit}/>
                </fieldset>
                <BoilingVerdict celsius={parseFloat(temperature)}></BoilingVerdict>
            </div>
        );
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

function Form_o() {
    return (
        <div>
            {/*html写法*/}
            <form>
                <label>
                    名字:
                    <input type="text" name="name"/>
                </label>
                <input type="submit" value="提交"/>
            </form>
        </div>
    )
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

export default Form;