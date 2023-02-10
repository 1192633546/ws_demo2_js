import React, {useState} from "react";

import {Button, Space} from 'antd';

function AntD() {
    return (
        <div>
            <App/>
            <Ad></Ad>
        </div>
    )
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
function Ad(){
    <Space wrap>
        <Button type="primary">Primary Button</Button>
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
    </Space>
}
export default AntD;
