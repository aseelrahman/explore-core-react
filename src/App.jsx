import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Person />
      <Sports />
      <Pet />
      <Person />
      <Sports />
    </>
  )
}

function Person(){
  const age = 17;
  const name = 'Jolil';
  return(
    <p>I am a person: {name}, age: {age}</p>
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
