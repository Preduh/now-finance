import React from "react";

import { Container } from "./styles.js";

const Content = (props) => {
  return (
    <Container id="content" {...props}>
      {props.children}
    </Container>
  );
};

export default Content;
