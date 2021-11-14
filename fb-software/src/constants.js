import React from "react";
import {
  FaHome,
  FaFolderOpen,
  FaPhoneSquareAlt,
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
    icon: <FaHome />,
  },
  {
    id: 2,
    text: "about",
    url: "/about",
    icon: <FaFacebookSquare />,
  },
  {
    id: 3,
    text: "services",
    url: "/services",
    icon: <FaFacebookSquare />,
  },
  {
    id: 4,
    text: "projects",
    url: "/projects",
    icon: <FaFolderOpen />,
  },
  {
    id: 5,
    text: "contact",
    url: "/contact",
    icon: <FaPhoneSquareAlt />,
  },
];

export const socials = [
  {
    id: 1,
    icon: <FaFacebookSquare />,
    title: "facebook",
  },
  {
    id: 2,
    icon: <FaLinkedin />,
    title: "linkedin",
  },
  {
    id: 3,
    icon: <FaTwitterSquare />,
    title: "twitter",
  },
];

// export const services = [
//   {
//     id: 1,
//     icon: <GiCompass />,
//     title: 'mission',
//     text:
//       'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
//   },
//   {
//     id: 2,
//     icon: <GiDiamondHard />,
//     title: 'vision',
//     text:
//       'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
//   },
//   {
//     id: 3,
//     icon: <GiStabbedNote />,
//     title: 'history',
//     text:
//       'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
//   },
// ]

// export const products_url = 'https://course-api.com/react-store-products'

// export const single_product_url = `https://course-api.com/react-store-single-product?id=`
