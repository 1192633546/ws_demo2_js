import './List.css';
import React from 'react';

const numbers = [1, 2, 3, 4, 5, 6];

function List() {
    return (
        <div className={"list"}>
            <div>NumberList：</div>
            <NumberList numbers={numbers}></NumberList>
        </div>
    )
}


function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((numbers) => <li>{numbers}</li>)
    return (
        <li>{listItems}</li>
    )
}


export default List;