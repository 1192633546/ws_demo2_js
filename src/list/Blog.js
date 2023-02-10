import React from "react";

class BlogC extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0}
        ///1、 这边绑定是必要的，这样 `this` 才能在回调函数中使用
        // 2、使用箭头函数，不需要绑定
        // this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        this.setState(function (state) {
            console.log(state.count)
            return {count: this.state.count + 1}
        })
    }


    render() {
        return (
            <div>
                <div>
                    <h1>点击事件</h1>
                </div>
                <div>
                    <button onClick={this.handleClick}>点击的次数:{this.state.count}</button>
                </div>
                <Blog posts={posts}></Blog>
            </div>
        );
    }

}

function Blog(props) {

    const sidebar = (
        <ul>
            {props.posts.map((post) =>
                <li key={post.id}>{post.title}
                </li>
            )}
        </ul>
    );

    const content = props.posts.map((post) =>
        <div key={post.id} onClick={() => this.handleClick()}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    );
    return (
        <div>
            {sidebar}
            <hr/>
            {content}
        </div>
    );
}


const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];
export default BlogC