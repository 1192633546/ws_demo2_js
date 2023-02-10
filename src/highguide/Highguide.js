import React from "react";
import {add, parseIntSlef} from "./Math";
import OtherComponent from "./OtherComponent";
import {Image} from "antd";

const OtherComponent_lazy = React.lazy(() => import('./OtherComponent'));

function Highguide() {
    return (
        <div className={"Highguide"}>
            {/* eslint-disable-next-line no-undef */}
            <h1>Highguide </h1>
            <h1>{add(1, 2)}</h1>
            <h1>{parseIntSlef(1)}</h1>
            <OtherComponent_lazy/>
            <OtherComponent></OtherComponent>
            {/*<Image src={getInitialState.avatar}></Image>*/}
            <Image className={"img_avatar"} src={"https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"}></Image>
            <h1 className={"id10"}>
                img_avatar
            </h1>
        </div>
    )
}
// src/app.ts
 function getInitialState() {
    return {
        name: 'Serati Ma',
        avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
    };
}


export default Highguide;