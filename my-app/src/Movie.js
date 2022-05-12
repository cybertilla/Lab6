import React from 'react'

export default function Movie(props) {
    return (
        <li class="list-group-item">
            {  props.item.title }
        </li>
    )
}