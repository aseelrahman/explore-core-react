import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import ToDo from './Todo'
import Actor from './Actor'
import Singer from './Singer'

function App() {

  const actors = ['Bappa Raj', 'Omar Sunny', 'Salman Shah', 'Jasim', 'Anwar', 'Rajjak'];

  const singers = [
    {id: 1, name: 'Dr. Mahfuz', age: 68},
    {id: 2, name: 'Tahsan', age: 45},
    {id: 3, name: 'Shuvro Dev', age: 57},
  ]

  // const time = 50;

  return (
    <>
      <h1>React core concepts</h1>

      {
        singers.map(singer => <Singer key={singer.id} singer={singer}/>)
      }

      {/* {
        actors.map(actor => <Actor actor={actor}/>)
      } */}

      {/* <ToDo task='Learn React' isDone={true} time={time}/>
      <ToDo task='Revise JS' isDone={false}/>
      <ToDo task='Take a shower' isDone={true} time="100"/> */}
      {/* <Student />
      <Student />
      <Person />
      <Developer name='Mozumdar' tech='JS' gear='Laptop' />
      <Developer name='Rajon' tech='Python' gear='Desktop' />
      <Developer name='Sabana' tech='Java' gear='Tablet' />
      <Player name="Tamim" runs="5000"/>
      <Player name="Mushi" runs="5000"/>
      <Salami event="Roja Eid" amount="20"/>
      <Salami event="Graduation" /> */}

    </>  
  )
}

function Salami({event, amount = 0}){
  return(
    <div className='student'>
      <p>Salami for: {event}</p>
      <p>Amount: ${amount}</p>
    </div>
  )
}

function Player({name, runs}){
  return(
    <div className='student'>
      <h3>Name: {name}</h3>
      <p>Runs: {runs}</p>
    </div>
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
