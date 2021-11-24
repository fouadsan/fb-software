import React from "react";
import {
  Link,
  Social,
  Service,
  Technology,
  Experience,
  Coordinate,
} from "./models";

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

import mobileIcon from "../assets/mobile-dev.png";
import webIcon from "../assets/web-dev.png";
import otherCodeIcon from "../assets/other-code.png";
import reactNativeIcon from "../assets/react-native.svg";

export const LINKS = [
  new Link(1, "home", "/", <FaHome />),
  new Link(2, "about", "/about", <FaFacebookSquare />),
  new Link(3, "services", "/services", <FaFacebookSquare />),
  new Link(4, "projects", "/projects", <FaFolderOpen />),
  new Link(5, "contact", "/contact", <FaPhoneSquareAlt />),
];

export const SOCIALS = [
  new Social(1, <FaFacebookSquare />, "facebook"),
  new Social(2, <FaLinkedin />, "linkedin"),
  new Social(3, <FaTwitterSquare />, "twitter"),
  new Social(4, <FaGithub />, "github"),
];

export const SERVICES = [
  new Service(
    1,
    webIcon,
    "web development",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi"
  ),
  new Service(
    2,
    mobileIcon,
    "mobile development",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi"
  ),
  new Service(
    3,
    otherCodeIcon,
    "other coding stuff",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi"
  ),
];

export const TECHNOLOGIES = [
  new Technology(
    1,
    "https://www.vectorlogo.zone/logos/djangoproject/djangoproject-ar21.svg",
    "django"
  ),
  new Technology(
    2,
    "https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg",
    "react"
  ),
  new Technology(
    3,
    "https://www.vectorlogo.zone/logos/flutterio/flutterio-ar21.svg",
    "flutter"
  ),
  new Technology(4, reactNativeIcon, "react-native"),
  new Technology(
    5,
    "https://www.vectorlogo.zone/logos/firebase/firebase-ar21.svg",
    "firebase"
  ),
  new Technology(
    6,
    "https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-ar21.svg",
    "bootstrap"
  ),
  new Technology(
    7,
    "https://www.vectorlogo.zone/logos/dartlang/dartlang-ar21.svg",
    "Dart"
  ),
  new Technology(
    8,
    "https://www.vectorlogo.zone/logos/nodejs/nodejs-horizontal.svg",
    "node"
  ),
  new Technology(
    9,
    "https://www.vectorlogo.zone/logos/mysql/mysql-ar21.svg",
    "mySQL"
  ),
  new Technology(
    10,
    "https://www.vectorlogo.zone/logos/javascript/javascript-horizontal.svg",
    "javascript"
  ),
  new Technology(
    11,
    "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-ar21.svg",
    "html"
  ),
  new Technology(
    12,
    "https://www.vectorlogo.zone/logos/w3_css/w3_css-ar21.svg",
    "css"
  ),
  new Technology(
    13,
    "https://www.vectorlogo.zone/logos/stripe/stripe-ar21.svg",
    "stripe"
  ),
  new Technology(
    14,
    "https://www.vectorlogo.zone/logos/dartlang/dartlang-ar21.svg",
    "dart"
  ),
  new Technology(
    15,
    "https://www.vectorlogo.zone/logos/python/python-ar21.svg",
    "python"
  ),
  new Technology(
    16,
    "https://www.vectorlogo.zone/logos/docker/docker-ar21.svg",
    "docker"
  ),
  new Technology(
    16,
    "https://www.vectorlogo.zone/logos/paypal/paypal-ar21.svg",
    "paypal"
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

export const projects_url = "https://course-api.com/react-store-products";

// export const single_product_url = `https://course-api.com/react-store-single-product?id=`
