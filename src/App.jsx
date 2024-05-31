import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'


function App() {
  const Actors = ['sakin', 'raj', 'maha' , 'kitkit']

  return (
    <>

    
    
      
      <h1>Vite + React</h1>

      <Actor name={"dipu"}></Actor>
      {
        Actors.map(actor => <Actor name={actor}></Actor> )
      }






      {/* <Todo task="learn react" isDone="false"></Todo> */}


      {/* <Device name="laptop" price="44"></Device>
      <Device name="laptop" price="77"></Device>
    <Person></Person>
<Student></Student>
<Developer></Developer> */}
      
    </>
  )
}

// function Person(){
//   return <h3>i am a parson</h3>
// }

// function Student(){
//   return <div className='student'>
//     <h2>hello</h2>
//     <p>age 30</p>
//     <p>name </p>
//   </div>
// }

// function Developer(){
//   const developerStyle ={
//     margin: '30px',
//     border: '2px solid red'

//   }

//   return (
//     <div style={developerStyle}>
// <h5>devo devo</h5>
//     </div>
    
//   )
  
// }

// function Device({name, price}){
//   console.log(name, price)
//   return (
//     <h2>this device : {name} price: {price}</h2>
//   )
// }
export default App
