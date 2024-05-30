import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const handleSubmit = () => {
    console.log("submit works!");
  }

  return (
    <>
      <h1>Simple Authentication</h1>
      <form onSubmit={handleSubmit} style={{minWidth:'40rem'}}>
        <div style={{display:'flex', justifyContent:'center', width:'100%', gap:10}}>
          <input required type="email" placeholder='Email' style={{width:'15rem', height:'2.2rem', paddingLeft:'10px'}}/>
          <input required type="password" placeholder='Password' style={{width:'15rem', height:'2.2rem', paddingLeft:'10px'}}/>
        </div>
        <button type='submit' style={{margin:'2rem', width:'50%'}}>Sign Up</button>
      </form>
    </>
  )
}

export default App
