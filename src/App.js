import "bootstrap/dist/css/bootstrap.min.css"
import "./styles.scss"

import { Contact, Home, Projects, Skills } from "./pages"
import { Header, Navigator } from "./components"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

import { LANGUAGES } from "./constants"
import { useState } from "react"

function App() {
  const { en, es } = LANGUAGES
  const [isOpen, setIsOpen] = useState(false)
  const [language, setLanguage] = useState(es)
  const handleLanguage = () => {
    if (language === en) {
      setLanguage(es)
    } else {
      setLanguage(en)
    }
  }
  const handleIsOpen = () => {
    setIsOpen(!isOpen)
  }
  return (
    <Router>
      <Header handleIsOpen={handleIsOpen} isOpen={isOpen} />
      <Navigator
        isOpen={isOpen}
        handleIsOpen={handleIsOpen}
        handleLanguage={handleLanguage}
        language={language}
      />
      <Routes>
        <Route exact path="/" element={<Home language={language} />} />
        <Route exact path="/skills" element={<Skills language={language} />} />
        <Route
          exact
          path="/projects"
          element={<Projects language={language} />}
        />
        <Route
          exact
          path="/contact"
          element={<Contact language={language} />}
        />
      </Routes>
    </Router>
  )
}

export default App
