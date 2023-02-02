import React from "react"

const ContactItem = ({ item }) => {
  console.log(item)
  return (
    <div className="contact-container__social-item d-flex flex-row align-items-center gap-3 w-100">
      {<item.icon className="contact-container__social-item__icon" />}
      <a
        className="contact-container__social-item__title"
        href={item.link ? item.link : item.value}
      >
        {item.value}
      </a>
    </div>
  )
}

export default ContactItem
