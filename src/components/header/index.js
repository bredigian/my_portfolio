import { BsChevronRight } from "react-icons/bs"
import React from "react"

const Header = ({ handleIsOpen, isOpen }) => {
  return (
    <div className="header d-flex justify-content-between align-items-center w-100 p-4">
      <BsChevronRight
        className={!isOpen ? "header-iconNavbar" : "header-iconNavbar isOpen"}
        onClick={handleIsOpen}
      />
      {/* <h1 className="header-title">{title}</h1> */}
    </div>
  )
}

export default Header
