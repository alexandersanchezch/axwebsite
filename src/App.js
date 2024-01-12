import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Community from './pages/Community'
import Projects from './pages/Projects'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/community-pro" element={<Community />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </Router>
    )
}

export default App
