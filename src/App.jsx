import React from 'react'
import EidGreetings from './components/EidGreetings.jsx'
import { Router, Routes, Route } from "react-router";

function App() {

  return (
    
      <Routes>
        <Route path="/h/:dynamicSegment" element={<EidGreetings/>}/>
      </Routes>
    
  )
}

export default App
