import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { DATA_GITHUB } from '../../GraphQL/Queries'
import Topic from '../../components/Topic/Topic'
import './Home.css'
import Search from '../../components/Search/Search'

export default function Home() {

    const [searchTopic, setSeachTopic] = useState('react')

    const {data, loading} = useQuery(DATA_GITHUB,{variables:{topic:searchTopic}})
    
    const handleClick = (newSearchTopic) => {
        setSeachTopic(newSearchTopic)
    }
    const handleSubmit = (e,text) =>{
        e.preventDefault();
        if(text.length > 0)
            setSeachTopic(text)        
    }

    return (
        <div className='Home'>
            <div className="Home__info">
                <h1>GITHUB API</h1>
                <p>All Related Topics From <span className='Home__info__keyword'>{searchTopic}</span></p>               
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
                        <h4>Please Try leter... </h4>
                        
            }
        </div>
    )
}
