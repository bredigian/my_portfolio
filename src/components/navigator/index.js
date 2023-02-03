import { NavLink } from "react-router-dom"
import React from "react"
import Switch from "../switch"

const Navigator = ({ isOpen, handleIsOpen }) => {
  const handleChecked = () => {
    console.log("checked")
  }
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
        <ul className="navigator-navbar__nav d-flex flex-column align-items-start gap-4">
          <li>
            <NavLink to={"/"} onClick={handleIsOpen}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to={"/skills"} onClick={handleIsOpen}>
              Conocimientos
            </NavLink>
          </li>
          <li>
            <NavLink to={"/projects"} onClick={handleIsOpen}>
              Proyectos
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contact"} onClick={handleIsOpen}>
              Contactame
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="navigator-config d-flex align-items-center justify-content-around p-4">
        <div className="navigator-config__language d-flex align-items-center gap-4">
          <p className="navigator-config__language-value m-0">Español</p>
          <Switch rounded={true} handleChecked={handleChecked} />
          <p className="navigator-config__language-value m-0">English</p>
        </div>
      </div>
    </div>
  )
}

export default Navigator
