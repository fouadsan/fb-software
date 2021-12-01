import React from "react";
import { Link, Social, Education, Experience, Coordinate } from "./models";

import {
  FaHome,
  FaFolderOpen,
  FaPhoneSquareAlt,
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaGithub,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

import { GoLocation } from "react-icons/go";

export const LINKS = [
  new Link(1, "home", <FaHome />),
  new Link(2, "references", <FaFolderOpen />),
  new Link(3, "services", <FaFacebookSquare />),
  new Link(4, "contact", <FaPhoneSquareAlt />),
];

export const SOCIALS = [
  new Social(1, <FaFacebookSquare />, "facebook"),
  new Social(2, <FaLinkedin />, "linkedin"),
  new Social(3, <FaTwitterSquare />, "twitter"),
  new Social(4, <FaGithub />, "github"),
];

export const EDUCATION = [
  new Education(
    1,
    "Master Degree in Cyber Security",
    "10/10/2020",
    "10/10/2020",
    "el bez",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi"
  ),
  new Education(
    2,
    "React Complete course tutorials and projects",
    "10/10/2020",
    "10/10/2020",
    "el bez",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi"
  ),
  new Education(
    3,
    "webIcon",
    "august, 2021",
    "present",
    "el bez",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi"
  ),
];

export const EXPERIENCES = [
  new Experience(
    1,
    "webIcon",
    "10/10/2020",
    "10/10/2020",
    "el bez",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi"
  ),
  new Experience(
    2,
    "webIcon",
    "10/10/2020",
    "10/10/2020",
    "el bez",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi"
  ),
  new Experience(
    3,
    "webIcon",
    "august, 2021",
    "present",
    "el bez",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi"
  ),
];

export const COORDINATES = [
  new Coordinate(1, <GoLocation />, "location", "El-Eulma, Setif, Algeria"),
  new Coordinate(2, <FaEnvelope />, "email", "F.benayad95@gmail.com"),
  new Coordinate(3, <FaPhone />, "phone", "+213 561 587 780"),
];

// export const projects_url = "https://course-api.com/react-store-products";

// export const single_product_url = `https://course-api.com/react-store-single-product?id=`
