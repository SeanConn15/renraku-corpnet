import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './Header';
import Homepage from './Homepage';
import Resume from './Resume';
import Footer from './Footer';

const sections = [
  { title: 'Mission Statement', url: '/mission' },
  { title: 'Resume', url: '/resume' },
];

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
    }
});

export default class Main extends React.Component
{
  constructor(props) {
      super(props);
        
  }

  render() {


      return (
          <Router>
          <ThemeProvider theme={theme}>
              <CssBaseline />
              <Header zIndex="1400" title="Renraku Computer Systems" sections={sections} />
              <Switch>
                <Route path="/resume">
                    <Resume />
                </Route>
                <Route path="/">
                    <Homepage />
                </Route>
              </Switch>
              <Footer title="Attributions" description="Renraku Computer Systems is a fictional company from the tabletop game Shadowrun." />
            </ThemeProvider>
          </Router>
      );
  }

}
