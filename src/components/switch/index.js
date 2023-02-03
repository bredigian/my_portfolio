import React from "react"

const Switch = ({ rounded, handleChecked }) => {
  return (
    <label className="switch">
      <input type="checkbox" onClick={handleChecked} />
      <span className={!rounded ? "slider" : "slider rounded"}></span>
    </label>
  )
}

export default Switch
