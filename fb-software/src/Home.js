import React from "react";
import styled from "styled-components";

import {
  Hero,
  References,
  Services,
  Technologies,
  Experience,
} from "./components";

const HomePage = () => {
  return (
    <Wrapper>
      <Hero />
      <References />
      <Services />
      <Technologies />
      <Experience />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  overflow-x: hidden;
`;

export default HomePage;
