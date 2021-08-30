import React from 'react'
import "./Topic.css"

export default function Topic(props) {
    const { name, stargazers} = props.data

    return (
        <div className='Topic' onClick={()=>props.handleClick(name)}>
            <h3 className='Topic__name'>{name}</h3>
            <span className='Topic__stargazers'>stargazers: {stargazers.totalCount}</span>
            <div className="Topic__circle"></div>
        </div>
    )
}
