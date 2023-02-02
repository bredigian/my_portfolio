import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs"

import { SiGmail } from "react-icons/si"

export const CONTACT = [
  {
    id: 1,
    value: "+54 9 2281-599471",
    link: "https://wa.me/542281599471?text=Hola%20Gianluca!",
    icon: BsWhatsapp,
  },
  {
    id: 2,
    value: "bredicegian@gmail.com",
    link: "mailto:bredicegian@gmail.com",
    icon: SiGmail,
  },
  {
    id: 3,
    value: "https://www.linkedin.com/in/gianluca-bredice-62a65b230/",
    icon: BsLinkedin,
  },
  {
    id: 4,
    value: "https://github.com/bredigian",
    icon: BsGithub,
  },
]
