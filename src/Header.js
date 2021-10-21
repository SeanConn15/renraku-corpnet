import React from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";

export default function Header(props) {
  const { sections, title } = props;
  return (
    <React.Fragment>
      <AppBar position="sticky" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
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
            <Button component={RouterLink} to={section.url} color="inherit">
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
