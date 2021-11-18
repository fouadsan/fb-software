import React from "react";

import {
  FaHome,
  FaFolderOpen,
  FaPhoneSquareAlt,
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";

import mobileIcon from "./assets/mobile-dev.png";
import webIcon from "./assets/web-dev.png";
import desktopIcon from "./assets/web-dev.png";
import djangoIcon from "./assets/django.svg";
import firebaseIcon from "./assets/firebase.svg";
import reactIcon from "./assets/react.svg";
import stripeIcon from "./assets/stripe.svg";
import flutterIcon from "./assets/flutter.svg";
import reactNativeIcon from "./assets/react-native.svg";
import htmlCssIcon from "./assets/html-css.svg";
import jsIcon from "./assets/javascript.svg";
import nodeIcon from "./assets/node.svg";
import mysqlIcon from "./assets/mysql.svg";

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

export const services = [
  {
    id: 1,
    icon: webIcon,
    title: "web",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 2,
    icon: mobileIcon,
    title: "mobile",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 3,
    icon: desktopIcon,
    title: "desktop",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
];

export const technologies = [
  {
    id: 1,
    logo: djangoIcon,
    name: "django",
  },
  {
    id: 2,
    logo: reactIcon,
    name: "react",
  },
  {
    id: 3,
    logo: flutterIcon,
    name: "flutter",
  },
  {
    id: 4,
    logo: reactNativeIcon,
    name: "react-native",
  },
  {
    id: 5,
    logo: firebaseIcon,
    name: "firebase",
  },
  {
    id: 6,
    logo: "xx",
    name: "bootstrap",
  },
  {
    id: 7,
    logo: nodeIcon,
    name: "node",
  },
  {
    id: 8,
    logo: mysqlIcon,
    name: "mySQL",
  },
  {
    id: 9,
    logo: jsIcon,
    name: "JavaScript",
  },
  {
    id: 10,
    logo: htmlCssIcon,
    name: "HTML & CSS",
  },
  {
    id: 11,
    logo: stripeIcon,
    name: "Stripe",
  },
];

export const projects_url = "https://course-api.com/react-store-products";

// export const single_product_url = `https://course-api.com/react-store-single-product?id=`
