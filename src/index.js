import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Self from './Self';
import List from './list/List';
import Form from "./form/Form";
import reportWebVitals from './reportWebVitals';
import Highguide from "./highguide/Highguide";
import AntD from "./antd/AntD";
import ComponentsDemo from "./component/ComponentsDemo";
import StateDemo from "./state/StateDemo";
import WebSite from "./state/WebSite";
import LoginControl from "./event/LoginControl";
import Mailbox11 from "./calc/Mailbox";
import BlogC from "./list/Blog";

const root = ReactDOM.createRoot(document.getElementById('root'));
var name = "wwww";
root.render(
    <React.StrictMode>
        <BlogC></BlogC>
        <List></List>
        <Mailbox11></Mailbox11>
        <LoginControl></LoginControl>
        <WebSite name={name} link={"www.baidu.com"}/>
        <ComponentsDemo></ComponentsDemo>
        <AntD/>
        <App/>
        <Highguide/>
        <Form></Form>
        <Self/>
        <List/>
        <StateDemo/>
    </React.StrictMode>
);


// 渲染 element 这是jsx
// const element=<h1>this is element</h1>
// root.render(element)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
