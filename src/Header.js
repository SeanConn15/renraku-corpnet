import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import { useTheme } from '@material-ui/core/styles';


export default function Header(props) {
  const { sections, title } = props;
  const theme = useTheme()
  return (
    <React.Fragment>
      <AppBar position="sticky" sx={{zIndex: theme.zIndex.appBar}}>
        <Toolbar>
            <Link 
                  color="inherit"
                  noWrap
                  key={title}
                  variant="header1"
                  component={RouterLink}
                  to="/"
          >

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {title}
          </Typography>
            </Link>
        {sections.map((section) => (
          <Button
            component={RouterLink}
            to={section.url}
            color="inherit"
          > 
            {section.title} 
          </Button>
        ))}

        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
