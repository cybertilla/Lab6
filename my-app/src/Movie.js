import React from 'react'
import star from './/images/star.png';

export default function Movie(props) {
    const n = props.item.grade;

    return (
        <li className="list-group-item">
            {  props.item.title }
            {/* create an array of length n and put stars in it */}
            {Array.from({length: n}, (_, i) => <img src={star} key={i}></img>)}
            <button className="btn btn-sm btn-danger float-end" onClick={() => {props.deleteMovie(props.item.id)}}>X</button>
        </li>
    )
}