import { useState } from 'react'
import Hero from './Components/Hero'
import './App.css'

function App() {
  return (
    <div className="App">
      <Hero />
      <section style={{ height: '300vh' }}>
        {/* Spacer for scrolling */}
      </section>
    </div>
  )
}

export default App

