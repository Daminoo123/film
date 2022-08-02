import React from 'react'
import {Form} from 'react-bootstrap'
import './Filter.css'
export const Filter= ({inputsearch,setinputsearch}) => {
  return (
    <div>
        <Form.Control className='search' type='text' placeholder='search for a movie ...'
        value={inputsearch}
        onChange={(e)=>setinputsearch(e.target.value)}
        
        
    
        />


    </div>
  )
}
