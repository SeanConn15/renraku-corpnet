import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'This webpage Copyright © '}
      <Link color="inherit" href="mailto:seanconn256@protonmail.com">
        Sean Connelly
      </Link>
      {', '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
      root: {
              display: 'flex',
            },
      ToolBar: {
              zIndex: theme.zIndex.drawer + 1,
            },
      drawer: {
              width: drawerWidth,
              flexShrink: 0,
            },
      drawerPaper: {
              width: drawerWidth,
            },
      drawerContainer: {
              overflow: 'auto',
            },
      content: {
              flexGrow: 1,
              padding: theme.spacing(3),
            },
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  const { description, title } = props;

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          {description}
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
