// import React, { Component } from 'react'

// export default class CBCStateEx extends Component {
//   render() {
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }


import React, {Component} from 'react';
class CBCStateEx extends Component {
  constructor(){
    super();
    this.state={
        username:"Pranav"
    };
  }
//   changeName=()=>{
//     this.setState({username: "tejasri is absent for last two days"});
//   }
  render(){
    console.log(this);
    return(
      <div className='cbcstate'> 
        {/* <h1>{this.state.username}</h1>
        <button onClick={this.changeName}>Update the state</button> */}
      </div>
    )
  }
}
export default CBCStateEx;
