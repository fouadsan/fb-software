import React from "react";
import { Links, Socials, Services, Technologies } from "./models";

import {
  FaHome,
  FaFolderOpen,
  FaPhoneSquareAlt,
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaGithub,
} from "react-icons/fa";

import mobileIcon from "../assets/mobile-dev.png";
import webIcon from "../assets/web-dev.png";
import otherCodeIcon from "../assets/other-code.png";
import reactNativeIcon from "../assets/react-native.svg";

export const LINKS = [
  new Links(1, "home", "/", <FaHome />),
  new Links(2, "about", "/about", <FaFacebookSquare />),
  new Links(3, "services", "/services", <FaFacebookSquare />),
  new Links(4, "projects", "/projects", <FaFolderOpen />),
  new Links(5, "contact", "/contact", <FaPhoneSquareAlt />),
];

export const SOCIALS = [
  new Socials(1, <FaFacebookSquare />, "facebook"),
  new Socials(2, <FaLinkedin />, "linkedin"),
  new Socials(3, <FaTwitterSquare />, "twitter"),
  new Socials(4, <FaGithub />, "github"),
];

export const SERVICES = [
  new Services(
    1,
    webIcon,
    "web development",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi"
  ),
  new Services(
    2,
    mobileIcon,
    "mobile development",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi"
  ),
  new Services(
    3,
    otherCodeIcon,
    "other coding stuff",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi"
  ),
];

export const TECHNOLOGIES = [
  new Technologies(
    1,
    "https://www.vectorlogo.zone/logos/djangoproject/djangoproject-ar21.svg",
    "django"
  ),
  new Technologies(
    2,
    "https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg",
    "react"
  ),
  new Technologies(
    3,
    "https://www.vectorlogo.zone/logos/flutterio/flutterio-ar21.svg",
    "flutter"
  ),
  new Technologies(4, reactNativeIcon, "react-native"),
  new Technologies(
    5,
    "https://www.vectorlogo.zone/logos/firebase/firebase-ar21.svg",
    "firebase"
  ),
  new Technologies(
    6,
    "https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-ar21.svg",
    "bootstrap"
  ),
  new Technologies(
    7,
    "https://www.vectorlogo.zone/logos/dartlang/dartlang-ar21.svg",
    "Dart"
  ),
  new Technologies(
    8,
    "https://www.vectorlogo.zone/logos/nodejs/nodejs-horizontal.svg",
    "node"
  ),
  new Technologies(
    9,
    "https://www.vectorlogo.zone/logos/mysql/mysql-ar21.svg",
    "mySQL"
  ),
  new Technologies(
    10,
    "https://www.vectorlogo.zone/logos/javascript/javascript-horizontal.svg",
    "javascript"
  ),
  new Technologies(
    11,
    "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-ar21.svg",
    "html"
  ),
  new Technologies(
    12,
    "https://www.vectorlogo.zone/logos/w3_css/w3_css-ar21.svg",
    "css"
  ),
  new Technologies(
    13,
    "https://www.vectorlogo.zone/logos/stripe/stripe-ar21.svg",
    "stripe"
  ),
  new Technologies(
    14,
    "https://www.vectorlogo.zone/logos/dartlang/dartlang-ar21.svg",
    "dart"
  ),
  new Technologies(
    15,
    "https://www.vectorlogo.zone/logos/python/python-ar21.svg",
    "python"
  ),
  new Technologies(
    16,
    "https://www.vectorlogo.zone/logos/docker/docker-ar21.svg",
    "docker"
  ),
  new Technologies(
    16,
    "https://www.vectorlogo.zone/logos/paypal/paypal-ar21.svg",
    "paypal"
  ),
];

export const projects_url = "https://course-api.com/react-store-products";

// export const single_product_url = `https://course-api.com/react-store-single-product?id=`
