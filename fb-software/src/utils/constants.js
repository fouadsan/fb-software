import React from "react";
import { Link, Social, Coordinate } from "./models";

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
  new Link(2, "projects", <FaFolderOpen />),
  new Link(3, "services", <FaFacebookSquare />),
  new Link(4, "contact", <FaPhoneSquareAlt />),
];

export const SOCIALS = [
  new Social(
    1,
    <FaFacebookSquare />,
    "facebook",
    "https://www.facebook.com/people/Fou-Ad/100008522377284"
  ),
  new Social(
    2,
    <FaLinkedin />,
    "linkedin",
    "https://www.linkedin.com/in/fouad-b-7a2185208/"
  ),
  new Social(
    3,
    <FaTwitterSquare />,
    "twitter",
    "https://twitter.com/FouAd44261068"
  ),
  new Social(4, <FaGithub />, "github", "https://github.com/fouadsan"),
];

export const COORDINATES = [
  new Coordinate(1, <GoLocation />, "location", "El-Eulma, Setif, Algeria"),
  new Coordinate(2, <FaEnvelope />, "email", "F.benayad95@gmail.com"),
  new Coordinate(3, <FaPhone />, "phone", "+213 561 587 780"),
];

export const cvUrl =
  "https://firebasestorage.googleapis.com/v0/b/react-portfolio-3169d.appspot.com/o/files%2FWeb%20%26%20Mobile%20Developer%20(eng-fr).pdf?alt=media&token=27c3fc63-3ab7-4943-b9f2-5c1172d3cc2a";
