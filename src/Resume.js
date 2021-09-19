import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import WorkIcon from '@material-ui/icons/Work';
import HelpIcon from '@material-ui/icons/Help';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import SchoolIcon from '@material-ui/icons/School';
import CategoryIcon from '@material-ui/icons/Category';
import AssignmentIcon from '@material-ui/icons/Assignment';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link as RouterLink } from "react-router-dom";

import Header from './Header';

const sections = [
  { title: 'Mission Statement', url: '/mission' },
  { title: 'Resume', url: '/resume' },
];

const hobbies = [
      'Board Gaming (Shadowrun, DnD)',
      'Cycling',
      'Calisthenics',
]

const languages = [
          'C',
          'C++',
          'Java',
          'Javascript',
          'C#',
          'Python',
          'BASIC',
          'BASH',
          'CSS/HTML',
          'ARM Assembly',
]

const sysProgramming = [
          'Implemented a shell which worked similar to bash that supports piping as well as input and output redirection',
          'Developed a memory management function which allocates and frees arbitrary memory sizes dynamically, similar to malloc',
]

const operatingSystems = [
          'Programmed OS level code for a Process Scheduler, as well as implemented a piping system calls in XINU, a linux like environment',
          'Created and modified OS level data structures for mutual exclusion, inter-process communication and process runtime/timing',
]

const drawerWidth = 240;



const useStyles = makeStyles((theme) => ({
      root: {
              display: 'flex',
            }, 
      AppBar: {
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

}));


function RoutedListItem(props) {
    return <ListItem component={RouterLink} to={props.to} button>
      <ListItemIcon>
        {props.icon}
      </ListItemIcon>
      <ListItemText primary={props.text} />
    </ListItem>
}

function NormalListItem(props) {
    return <ListItem href={props.to} component="a" button>
      <ListItemIcon>
        {props.icon}
      </ListItemIcon>
      <ListItemText primary={props.text} />
    </ListItem>
}

function UnorderedList(props) {
    return <div>
          <Typography id="skills" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {props.title}
          </Typography>
        <ul>
        {props.list.map((item) => (
            <li>
            {item}
            </li>
        ))}
    </ul>
        </div>

}


const mainListItems = (
  <div>
    <NormalListItem to="#top" text="Intro" icon=<HelpIcon/> />
    <NormalListItem to="#experience" text="Work Experience" icon=<WorkIcon/> />
    <NormalListItem to="#education" text="Education" icon=<SchoolIcon/> />
    <NormalListItem to="#skills" text="Relevant Skills" icon=<AssignmentTurnedInIcon/> />
    <NormalListItem to="#hobbies" text="Hobbies/Interests" icon=<CategoryIcon/> />
  </div>
);

const secondaryListItems = (
  <div>
    <NormalListItem to="mailto:seanconn256@protonmail.com" text="Contact Me" icon=<EmailIcon/> />
    <NormalListItem to="/" text="Source Code" icon=<GitHubIcon/> />
  </div>
);

export default function Resume()
{
      const classes = useStyles();
      return (
      <div>

      <Header title="------------------------------- Renraku Computer Systems" sections={sections} />
        <Box sx={{ display: 'flex' }}>
          <Drawer
            variant="permanent"
            open="true"
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
              },
            }}
            variant="permanent"
            anchor="left"
            classes={{
                paper: classes.drawer,
            }}>
            <Divider />
            <List>{mainListItems}</List>
            <Divider />
            <List>{secondaryListItems}</List>
          </Drawer>
          <Box
            component="main"
            sx={{ 'margin-left': drawerWidth, flexGrow: 1, bgcolor: 'background.default', p: 3 }}
          >
          <p id="experience" >RELEVANT WORK EXPERIENCE</p>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing="3"
            >


              <Grid item xs={6}>
                  <Card>
                      <CardContent>
                    <Typography variant="h5" component="h2">
                      Northrop Grumman, Mission Systems
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      Associate Security Software Engineer
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      August 2020 – Present
                    </Typography>
                      Worked in conjunction with the space systems department to develop enterprise space software
          <br/>
                      Collaborated with other engineers using the SCRUM methodology
          <br/>
                      Diagnosed existing software to correct errors
          <br/>
                      Communicated with subject matter experts across the company and outside
          <br/>
                      Rapidly learned and applied programming concepts to effectively work on new project areas
          <br/>
                      Debugged issues that included navigating though frontend, networking, and backend code in a
                      dynamic enviornment
          <br/>
                      Obtained a top secret clearance for the position
          <br/>

                      </CardContent>
                  </Card>
              </Grid>
              <Grid item xs={6}>
                  <Card>
                      <CardContent>
                    <Typography variant="h5" component="h2">
                        Aero Industries, Engineering Department
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        Engineering Intern
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        May 2019 – August 2019
                    </Typography>
                        Wrote software that worked to efficiently configure products to customer specifications
          <br/>
          The developed software took customer specifications to create a complete bill of materials and
          labor to get a cost and final price of the product usable during sales calls
          <br/>
          Worked in a collaborative environment which required effective cross departmental
          communication between management, engineering, accounting and sales
                      </CardContent>
                  </Card>
              </Grid>
              <Grid item xs={4}>
                  <Card>
                      <CardContent>
                    <Typography variant="h5" component="h2">
                        Jimmy John’s
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        Delivery Driver
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        January 2020 – May 2020
                    </Typography>
          Maintained work for approximately 20 hours weekly through the academic semester while a
          full-time student
                      </CardContent>
                  </Card>
              </Grid>
            </Grid>
          <p id="education"> EDUCATION </p>
              <Grid item xs={4}>
                  <Card>
                      <CardContent>
                    <Typography variant="h5" component="h2">
                        Purdue University
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        West Lafayette
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        January 2020 – May 2020
                    </Typography>
                 Bachelor of Science: Computer Science
          <br/>
          Security & Software Engineering Tracks
          <br/>
                Minor: History
          <br/>
                      </CardContent>
                  </Card>
              </Grid>
          <Typography id="skills" variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Relevant Skills
          </Typography>
          <UnorderedList title="Languages" list={languages} />
          <ul>
          </ul>

          <UnorderedList title='Systems Programming' list={sysProgramming} />

          <UnorderedList title='Operating Systems' list={operatingSystems} />

          <UnorderedList title = 'Hobbies/Interests' list={hobbies} />

          <UnorderedList title = 'Websites' list={['This website']}/>

          <UnorderedList title = 'Anrdoid Development' list={['Open Source contributions to Organic Maps; a google maps alternative']}/>

          </Box>
      </Box>

      </div>
      );
}
