import React, {useState} from 'react'
import './Search.css'
export default function Search({handleSubmit}) {

    const [text,setText] = useState('')
    
    const handleChange = (e) =>{
        setText(e.target.value)
    }

    return (
        <div className="Search">
                <form onSubmit={(e)=> handleSubmit(e,text)} autocomplete="off">
                    <input type="text" className='Search__input' onChange={e => handleChange(e)} value={text} placeholder='Search Some Topic...' />
                    <input type="submit" className='Search__submit' value="Search"  />
                </form>
            </div>
    )
}
