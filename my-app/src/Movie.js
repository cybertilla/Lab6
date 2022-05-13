import React from 'react'
//import star from './/images/star.png';


export default function Movie(props) {
    const n = props.item.grade;

    [...Array(n)].map((e, i) => <span className="busterCards" key={i}>♦</span>)

    return (
        <li className="list-group-item">
            {  props.item.title }
        </li>
    )
}