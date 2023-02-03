import { NavLink } from "react-router-dom"
import React from "react"
import Switch from "../switch"

const Navigator = ({ isOpen, handleLanguage, handleIsOpen, language }) => {
  return (
    <div
      className={
        !isOpen
          ? "navigator d-flex flex-column gap-3 w-75 hidden"
          : "navigator d-flex flex-column gap-3 w-75"
      }
    >
      <div className="navigator-perfil d-flex align-items-center justify-content-around p-4">
        <img
          src="../assets/image/me-1.jpg"
          alt="Perfil"
          className="navigator-perfil__img"
        />
        <p className="navigator-perfil__title m-0">Gianluca Bredice</p>
      </div>
      <nav className="navigator-navbar">
        <ul className="navigator-navbar__nav d-flex flex-column align-items-center m-0 p-0 gap-4">
          <li>
            <NavLink to={"/"} onClick={handleIsOpen}>
              {language === "Español" ? "Inicio" : "Home"}
            </NavLink>
          </li>
          <li>
            <NavLink to={"/skills"} onClick={handleIsOpen}>
              {language === "Español" ? "Habilidades" : "Skills"}
            </NavLink>
          </li>
          <li>
            <NavLink to={"/projects"} onClick={handleIsOpen}>
              {language === "Español" ? "Proyectos" : "Projects"}
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contact"} onClick={handleIsOpen}>
              {language === "Español" ? "Contactame" : "Contact me"}
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="navigator-config d-flex align-items-center justify-content-around p-4">
        <div className="navigator-config__language d-flex align-items-center gap-4">
          <p className="navigator-config__language-value m-0">
            {language === "Español" ? "Inglés" : "English"}
          </p>
          <Switch rounded={true} handleChecked={handleLanguage} />
        </div>
      </div>
    </div>
  )
}

export default Navigator
