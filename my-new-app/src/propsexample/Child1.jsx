import React from 'react'
import Child2 from './Child2'

const Child1 = (props) => {
    // console.log(props);
  return (
    <div className='c1'>Child1
        <hr />
        <Child2 university={props.university}/>
    </div>
  )
}

export default Child1