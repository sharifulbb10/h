import React from 'react'
import EidGreetings from './components/EidGreetings.jsx'
import { HashRouter as Router, Routes, Route } from "react-router";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/eid-greeting/:dynamicSegment" element={<EidGreetings/>}/>
      </Routes>
    </Router>
  )
}

export default App
