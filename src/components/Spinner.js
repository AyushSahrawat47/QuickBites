import React from 'react'
import spinner from './media/2.gif'

const Loader= ()=> {
    return (
      <div className='container text-center my-5' >
        <img className='my-5' src={spinner} alt="spinner" />
      </div>
    )
  
}

export default Loader
