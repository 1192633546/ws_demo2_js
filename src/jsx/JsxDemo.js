import React from "react";

import ReactDOM from "react-dom/client";
//jsx 语法
const element = <h1>this is element</h1>

ReactDOM.render(
    element,
    <h1 style={myStyle}>Hi ww</h1>,
    document.getElementById("example")
)
var myStyle = {
    // 样式
    color: "#ff0000",
    fontsize: 30
}
var arr = [
    <h1>h1</h1>,
    <h1>h2</h1>,
]


