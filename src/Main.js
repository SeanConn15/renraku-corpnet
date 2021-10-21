import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

import Homepage from "./Homepage";
import Resume from "./Resume";
import Footer from "./Footer";
import Box from "@mui/material/Box";

export default function Main() {
  return (
    <Router>
        <CssBaseline />
        <Box>
          <Switch>
            <Route path="/resume">
              <Resume />
            </Route>
            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
        </Box>
        <Footer
          title="Attributions"
          description="Renraku Computer Systems is a fictional company from the tabletop game Shadowrun."
        />
    </Router>
  );
}
