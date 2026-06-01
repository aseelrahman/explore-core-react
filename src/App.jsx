import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
    <>
      <h1>React core concepts</h1>
      <Student />
      <Student />
      <Person />
      <Developer name='Mozumdar' tech='JS' gear='Laptop' />
      <Developer name='Rajon' tech='Python' gear='Desktop' />
      <Developer name='Sabana' tech='Java' gear='Tablet' />

    </>  
  )
}

function Developer(props){
  console.log(props);
  return(
    <div style={{ border: '3px solid blue', padding: '10px', margin: '10px' }}>
      <h3>Developer: {props.name}</h3>
      <p>Technology: {props.tech}</p>
      <p>Gear: {props.gear}</p>
    </div>
  )
}


function Student(){
  return (
    <div className='student'>
      <p>Name: </p>
      <p>Dept: </p>
    </div>
  )
}

function Person(){
  const age = 17;
  const name = 'Jolil';
  const personStyle = {
    color: 'red',
    fontSize: '20px',
    textAlign: 'right',
  }
  return(
    <p style={personStyle}>I am a person: {name}, age: {age}</p>
  )
}

function Pet(){
  return(
    <p>Cat</p>
  )
}

function Sports(){
  return(
    <div>
      <h3>Cricket</h3>
      <ul>
        <li>Kila</li>
        <li>komola</li>
      </ul>
      <p>Playing and loosing</p>
    </div>
  )
}
export default App
