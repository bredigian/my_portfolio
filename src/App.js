import "bootstrap/dist/css/bootstrap.min.css"
import "./styles.scss"

import { Contact, Home, Projects, Skills } from "./pages"
import { Header, Navigator } from "./components"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

import { useState } from "react"

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const handleIsOpen = () => {
    setIsOpen(!isOpen)
  }
  return (
    <Router>
      <Header title={"Inicio"} handleIsOpen={handleIsOpen} isOpen={isOpen} />
      <Navigator isOpen={isOpen} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/skills" element={<Skills />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
