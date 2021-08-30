import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { DATA_GITHUB } from '../../GraphQL/Queries'
import Topic from '../../components/Topic/Topic'
import Search from '../../components/Search/Search'
import './Home.css'

export default function Home() {

    const [topic, setTopic] = useState('react')

    const {data, loading} = useQuery(DATA_GITHUB,{variables:{topic:topic}})//Get data from github api
    
    const handleClick = (newTopic) => {
        setTopic(newTopic)
    }

    const handleSubmit = (e,topic) =>{
        e.preventDefault();
        if(topic.length > 0)
            setTopic(topic)        
    }

    return (
        <div className='Home'>
            <div className="Home__info">
                <h1>GITHUB API</h1>
                <p>All Related Topics From <span className='Home__info__keyword'>{topic}</span></p>               
            </div>

            <Search handleSubmit={handleSubmit}/>
            
            {
                loading? 
                    <h4>loading...</h4>
                    :
                    data ?                                     
                        <div className="Home__topics-container">
                            {
                                data.topic.relatedTopics.length === 0?
                                    <h4>Topic not found!</h4>
                                    :
                                    data.topic.relatedTopics.map( (item, key)=>{                    
                                        return <Topic data={item} key={key} handleClick={handleClick}/>
                                    })      
                            }
                        </div>
                        : 
                        <h4>Facing some issues - Please Try leter... </h4>                       
            }
        </div>
    )
}
