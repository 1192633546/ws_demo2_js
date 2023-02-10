import React, {useState} from "react";

import {Button, Space} from 'antd';

function AntD() {
    return (
        <div>
            <FF/>
            <App/>
            <Cls></Cls>
        </div>
    )
}

function FF(){
    const msg = useState("demo")
    return <div> FF: {msg}</div>
}
const App = () => (
    <Space wrap>
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
    </Space>
);
class Cls extends React.Component{
    render() {
        return <div>
            <h1> clsclsclscls</h1>
        </div>
    }
}
export default AntD;
