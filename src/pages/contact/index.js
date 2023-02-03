import React, { useState } from "react"

import { CONTACT } from "../../db/contact"
import { ContactItem } from "../../components"

const Contact = ({ language }) => {
  const [showInformation, setShowInformation] = useState(false)
  setTimeout(() => {
    setShowInformation(true)
  }, 2500)
  return (
    <div className="contact d-flex flex-column align-items-center gap-4 p-4">
      <p className="contact-title">
        {language === "Español"
          ? "Contactame y hablemos :)"
          : "Contact me and let's talk :)"}
      </p>
      <div
        className={
          !showInformation
            ? "contact-container d-flex flex-column align-items-center gap-4"
            : "contact-container show d-flex flex-column align-items-center gap-4"
        }
      >
        <div className="contact-container__image d-flex flex-column align-items-center gap-4">
          <img
            className="contact-container__image-img"
            src="../../assets/image/me-2.jpg"
            alt="Gianluca Bredice"
          />
          <p className="contact-container__image-subtitle m-0">
            Gianluca Bredice
          </p>
        </div>
        <ul className="contact-container__social d-flex flex-column align-items-center gap-4 m-0 p-0">
          {CONTACT.map((item) => (
            <ContactItem key={item.id} item={item} />
          ))}
          <p className="contact-container__social-footer mt-5 m-0">
            La Plata, Argentina.
          </p>
        </ul>
      </div>
    </div>
  )
}

export default Contact
