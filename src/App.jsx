import React from 'react'
import EidGreetings from './components/EidGreetings.jsx'
import { Routes, Route } from "react-router";

function App() {

  return (
    
      <Routes>
        <Route path="/eid-greeting/:dynamicSegment" element={<EidGreetings/>}/>
      </Routes>
    
  )
}

export default App
