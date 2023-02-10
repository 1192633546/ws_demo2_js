import React from "react";

function HwMessage(props) {
    return <h1>Hi world:{props.name}</h1>
}

class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div>
                <HwMessage name={this.props.name}></HwMessage>
            </div>
        );
    }
}

export default function ComponentsDemo() {
    return <div>
        <Welcome name={"Welcome"}></Welcome>
        <Calc aa={100} bb={200}></Calc>
    </div>
}


function Calc(props) {
    function person(a, b) {
        return a + b
    }

    var obj = {
        person: function (a, b) {
            return a + b
        }
    }
    return <div>
        <h1>person(a,b):{obj.person(props.aa, props.bb)}</h1>
    </div>
}
