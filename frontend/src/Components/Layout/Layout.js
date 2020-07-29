import React from "react";
import Toolbar from "../Toolbar/Toolbar";
import { Container } from "@material-ui/core";

const Layout = (props) => {
  return (
    <div>
      <Toolbar />
      <Container maxWidth="lg">
        <div style={{ paddingTop: 50 }}>{props.children}</div>
      </Container>
    </div>
  );
};

export default Layout;
