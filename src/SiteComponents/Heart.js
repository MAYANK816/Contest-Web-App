import React from 'react'
import './Heart.css';
const Heart = (props) => {
    const {AddtoFav} = props;

  return (
    <button className='Heart_Component' onClick={AddtoFav}>
        <div className='Heart'>
            <img src="/Images/hearticon.png"></img>
        </div>

    </button>
  )
}

export default Heart