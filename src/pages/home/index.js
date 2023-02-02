import React, { useState } from "react"

const Home = () => {
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
        <p className="home-titles__title m-0">Hola! mi nombre es Gianluca</p>
        <p
          className={
            !showInformation
              ? "home-titles__subtitle m-0"
              : "home-titles__subtitle show m-0"
          }
        >
          Tengo 20 años <br /> y me dedico al <b>Desarrollo Frontend</b>
        </p>
      </div>
      <p
        className={
          !showInformation
            ? "home-description m-0"
            : "home-description show m-0"
        }
      >
        Soy una persona proactiva, organizada y responsable, con buenas
        relaciones interpersonales. Siempre tengo la mejor disposición para la
        realización de mis labores. Busco un puesto de trabajo donde pueda
        continuar aprendiendo, y a la vez compartir mi experiencia y
        conocimientos con el equipo de trabajo.
      </p>
    </div>
  )
}

export default Home
