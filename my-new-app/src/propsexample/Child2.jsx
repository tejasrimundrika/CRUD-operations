import React from 'react'
import Child3 from './Child3'

const Child2 = (props) => {
    // console.log(props);
  return (
    <div className='c2'>Child2
        <hr />
        <Child3 university={props.university}/>
    </div>
  )
}

export default Child2