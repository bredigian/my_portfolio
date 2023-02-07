import React, { useState } from "react"

const Home = ({ language }) => {
  const [showInformation, setShowInformation] = useState(false)
  setTimeout(() => {
    setShowInformation(true)
  }, 2500)
  return (
    <div className="home d-flex flex-column align-items-center gap-4 p-4">
      <img
        src="../assets/image/me-1.jpg"
        alt="Gianluca Bredice"
        className={!showInformation ? "home-image" : "home-image show"}
      />
      <div className="home-titles d-flex flex-column align-items-center gap-4">
        <p className="home-titles__title m-0">
          {language === "Español"
            ? "¡Hola! mi nombre es Gianluca"
            : "Hi! my name is Gianluca"}
        </p>
        <p
          className={
            !showInformation
              ? "home-titles__subtitle m-0"
              : "home-titles__subtitle show m-0"
          }
        >
          {language === "Español"
            ? "Tengo 20 años y me dedico al Desarrollo Frontend"
            : "I'm 20 and I dedicate myself to Frontend Development"}
        </p>
      </div>
      <p
        className={
          !showInformation
            ? "home-description m-0"
            : "home-description show m-0"
        }
      >
        {language === "Español"
          ? "Soy una persona proactiva, organizada y responsable, con buenas relaciones interpersonales. Siempre tengo la mejor disposición para la realización de mis labores. Busco un puesto de trabajo donde pueda continuar aprendiendo, y a la vez compartir mi experiencia y conocimientos con el equipo de trabajo."
          : "I am a proactive, organized and responsible person, with good interpersonal relationships. I always have the best disposition to carry out my work. I am looking for a job where I can continue learning, and at the same time share my experience and knowledge with the work team."}
      </p>
    </div>
  )
}

export default Home
