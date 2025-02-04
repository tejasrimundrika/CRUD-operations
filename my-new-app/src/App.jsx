// import React from 'react'

// const App = () => {
    // let ele = React.createElement("div" ,{id:"demo"},
    //     React.createElement("h1",null,"Header"),
    //     React.createElement("p",null,"para")
    //  )
//     let x = 1000;
//     return (
        // <div>
        //     <h1>Header</h1>
        //     <p>Para</p>
        //     {/* <div>Hello Welcome to React JS</div>
        //     <p>Lorem ipsum dolor sit.</p> */}
        // </div>
        // {ele}
//         <div>
//             <h1>React</h1>
//             <p>Lore ipsum dolor sit amet.</p>
//             {x}<br/>
//             {100*2}
//         </div>
//     )
// }

// export default App

// class Parent {
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
// }

// class Child extends Parent{
//     constructor(name, age ,city){
//         super(name, age);
//         this.city=city;
//     }
// }
// import React from "react";
// class App extends React.Component{
//     render(){
//         return(
//             <h1>Class Component</h1>
//         )
//     }
// };
// export default App;

// function App(){
//     return(
//         <h1>Function component</h1>
//     )
// }
// export default App;


// import Navbar from "./components/Navbar";
// import Main from "./components/Main";
// import Sidebar1 from "./components/Sidebar1";
// import Sidebar2 from "./components/Sidebar2";
// import Footer from "./components/Footer";
// const App=()=>{
//     return(
//         <div className="app">
//            <Navbar/>
//            <Main></Main>
//            <div className="sidebar">
//             <Sidebar1/>
//             <Sidebar2/>
//            </div>
//            <Footer/>
//         </div>
//     )
// }
// // export default App;


// import React, {Component} from 'react';
// import CBCPropsex1 from './propsexample/CBCPropsex1';

// class App extends Component{
//     render(){
//         return(
//             <div>App
//                 <hr/>

//                 <CBCPropsex1
//                 username="sam"
//                 age={25}
//                 desig={["developer","tester"]}
//                 userdetails={{city:"Hyd",area:"Maisammaguda"}}
//                 sendFun={function(){alert("Hi i m from parent component")}}
//                 />
//             </div>
//         )
//     }
// }
// export default App;


import React from 'react'
import FBCPropsex1 from './propsexample/FBCPropsex1'

const App = () => {
  return (
    <div>
      <FBCPropsex1
      username="tej"
      isLoggedIn={false}
      hobbies={["watching movies","travel","Roaming","studies"]}
      />

    </div>
  )
}

export default App




