import React, { useState, useEffect } from 'react'
import { disableFragmentWarnings, useQuery } from '@apollo/client'
import { DATA_GITHUB } from '../GraphQL/Queries'


export default function Home() {
    const [searchTopic, setSeachTopic] = useState('react')

    const {data, loading, error} = useQuery(DATA_GITHUB,{variables:{topic:searchTopic}})
    
    const handleClick = (newSearchTopic) => {
        setSeachTopic(newSearchTopic)
        console.log(newSearchTopic)
    }


    // Loading data
    if(loading) return <h4>loading...</h4>

    //Error Request
    if (error) return  <h4>Please Try leter...</h4>

    //Show Data
    return (
        <div>
            <h1>GITHUB API</h1>
            <p>Get All Topics from <span><b>{searchTopic}</b></span></p>
            <br /><br />


            {
                data.topic.relatedTopics.map( (item)=>{
                    const {id, name, stargazers} = item
                    return <div key={id} onClick={ ()=>handleClick(name) }>
                        <h2>{name}</h2>
                        <span>{stargazers.totalCount}</span>
                    </div>
                })
            }
        </div>
    )
}
