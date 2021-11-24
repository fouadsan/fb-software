import React from "react";
import styled from "styled-components";

import {
  Hero,
  References,
  Services,
  Technologies,
  Experiences,
  Contact,
} from "../components";

const HomePage = () => {
  return (
    <Wrapper>
      <Hero id={"hero"} />
      <References />
      <Services />
      <Technologies />
      <Experiences />
      <Contact />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  overflow-x: hidden;
`;

export default HomePage;
