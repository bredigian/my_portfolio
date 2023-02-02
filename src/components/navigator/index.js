import { NavLink } from "react-router-dom"
import React from "react"

const Navigator = ({ isOpen }) => {
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
            <NavLink to={"/"}>Inicio</NavLink>
          </li>
          <li>
            <NavLink to={"/skills"}>Conocimientos</NavLink>
          </li>
          <li>
            <NavLink to={"/projects"}>Proyectos</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contactame</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigator
