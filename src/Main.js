import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Homepage from './Homepage';
import Resume from './Resume';
import Footer from './Footer';
import Box from '@material-ui/core/Box';

const theme = createTheme({
      palette: {
          type: 'dark',
              primary: {
                        main: "#A30707"
                      },
            },
    overrides: {
        MuiToolbar: {
                root: {
                    background: "#A30707",
                },
           },
    },
        zIndex: {
            drawer: "0 !important",
            appBar: "10 !important",
        },
});

export default function Main()
{
      return (
          <Router>
          <ThemeProvider theme={theme}>
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
              <Footer title="Attributions" description="Renraku Computer Systems is a fictional company from the tabletop game Shadowrun." />
            </ThemeProvider>
          </Router>
      );

}
