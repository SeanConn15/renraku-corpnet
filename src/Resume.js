import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import WorkIcon from "@mui/icons-material/Work";
import HelpIcon from "@mui/icons-material/Help";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import SchoolIcon from "@mui/icons-material/School";
import CategoryIcon from "@mui/icons-material/Category";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import Card from "@mui/material/Card";
import CardMedia from '@mui/material/CardMedia';
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Header from "./Header";

const sections = [{ title: "Resume", url: "/resume" }];

const hobbies = ["Board Gaming (Shadowrun, DnD)", "Cycling", "Calisthenics"];

const languages = [
  "High Level:",
  "C++",
  "Javascript",
  "Bash",
  "React",
  "Java",
  "Low Level:",
  "C",
  "ARM Assembly",
  "x86 Assembly",
  "Technologies:",
  "Docker",
  "Ansible",
  "Git",
  "Atlassian Suite",
  "Linux",
];

const workTechnologies = [
  "Worked with docker and ansible for enterprise software deployments to multiple customers targeting different feature sets",
  "Used atlassian suite to coordinate, review, and publish pull requests and do code reviews",
  "Very familiar with git",
];

const outsideTechnologies = [
  "Contribued to open source projects like OrganicMaps in free time, doing android app development in Java and C++",
  "Wrote this website in React",
];

const classWork = [
  "Implemented a shell which worked similar to bash that supports piping as well as input and output redirection",
  "Developed a memory management function which allocates and frees arbitrary memory sizes dynamically, similar to malloc",
  "Programmed OS level code for a Process Scheduler, as well as implemented a piping system calls in XINU, a linux like environment",
  "Created and modified OS level data structures for mutual exclusion, inter-process communication and process runtime/timing",
];

const drawerWidth = 240;

function NormalListItem(props) {
  return (
    <ListItem href={props.to} component="a" button>
      <ListItemIcon>{props.icon}</ListItemIcon>
      <ListItemText primary={props.text} />
    </ListItem>
  );
}

function UnorderedList(props) {
  return (
    <div>
      <Typography id="skills" variant="h6" component="div" sx={{ flexGrow: 1 }}>
        {props.title}
      </Typography>
      <ul>
        {props.list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

const mainListItems = (
  <div>
    <NormalListItem to="#top" text="Intro" icon=<HelpIcon /> />
    <NormalListItem to="#experience" text="Work Experience" icon=<WorkIcon /> />
    <NormalListItem to="#education" text="Education" icon=<SchoolIcon /> />
    <NormalListItem
      to="#skills"
      text="Relevant Skills"
      icon=<AssignmentTurnedInIcon />
    />
    <NormalListItem
      to="#hobbies"
      text="Hobbies/Interests"
      icon=<CategoryIcon />
    />
  </div>
);

const secondaryListItems = (
  <div>
    <NormalListItem
      to="mailto:seanconn256@protonmail.com"
      text="Contact Me"
      icon=<EmailIcon />
    />
    <NormalListItem
      to="https://github.com/SeanConn15"
      text="Source Code"
      icon=<GitHubIcon />
    />
  </div>
);

export default function Resume() {
  return (
    <div>
      <Header title="Renraku Computer Systems" sections={sections} />
      <Box sx={{ display: "flex", }}>
        <Drawer
          variant="permanent"
          open="true"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          anchor="left"
        >
          <Toolbar />
          <Divider />
          <List>{mainListItems}</List>
          <Divider />
          <List>{secondaryListItems}</List>
        </Drawer>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: "background.default",
            p: 3,
          }}
        >
          <p id="experience">RELEVANT WORK EXPERIENCE</p>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={3}
          >
            <Grid item xs={12} lg={6} xl={4}>
              <Card>
                  <CardMedia
                  component="img"
                  height="300"
                  image="https://renraku-corpnet.com/images/geostar3.jpg"
                  alt="Northrop Grumman Satellite"
                />               
                <CardContent>
                  <Typography variant="h5" component="h2">
                    Northrop Grumman, Mission Systems
                  </Typography>
                  <Typography color="textSecondary">
                    Associate Security Software Engineer
                  </Typography>
                  <Typography color="textSecondary">
                    August 2020 – Present
                  </Typography>
                  Worked in conjunction with the space systems department to
                  develop enterprise space software
                  <br />
                  Collaborated with other engineers using the SCRUM methodology
                  <br />
                  Diagnosed existing software to correct errors
                  <br />
                  Communicated with subject matter experts across the company
                  and outside
                  <br />
                  Rapidly learned and applied programming concepts to
                  effectively work on new project areas
                  <br />
                  Debugged issues that included navigating though frontend,
                  networking, and backend code in a dynamic enviornment
                  <br />
                  Obtained a top secret clearance for the position
                  <br />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} lg={6} xl={4}>
              <Card>
                  <CardMedia
                  component="img"
                  height="300"
                  image="https://renraku-corpnet.com/images/aero_tarp.jpg"
                  alt="Truck With AERO tarp"
                />               
                <CardContent>
                  <Typography variant="h5" component="h2">
                    Aero Industries, Engineering Department
                  </Typography>
                  <Typography color="textSecondary">
                    Engineering Intern
                  </Typography>
                  <Typography color="textSecondary">
                    May 2019 – August 2019
                  </Typography>
                  Wrote software that worked to efficiently configure products
                  to customer specifications
                  <br />
                  The developed software took customer specifications to create
                  a complete bill of materials and labor to get a cost and final
                  price of the product usable during sales calls
                  <br />
                  Worked in a collaborative environment which required effective
                  cross departmental communication between management,
                  engineering, accounting and sales
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} lg={6} xl={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    Jimmy John’s
                  </Typography>
                  <Typography color="textSecondary">Delivery Driver</Typography>
                  <Typography color="textSecondary">
                    January 2020 – May 2020
                  </Typography>
                  Maintained work for approximately 20 hours weekly through the
                  academic semester while a full-time student
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <br />
          <p id="education"> EDUCATION </p>
          <Grid item xs={12} lg={6} xl={4}>
            <Card>
              <CardMedia
                  component="img"
                  height="194"
                  image="https://renraku-corpnet.com/images/purdue.jpg"
                  alt="Purdue Logo Banner"
                />               
              <CardContent>
                <Typography variant="h5" component="h2">
                  Purdue University
                </Typography>
                <Typography color="textSecondary">West Lafayette</Typography>
                <Typography color="textSecondary">
                  January 2020 – May 2020
                </Typography>
                Bachelor of Science: Computer Science
                <br />
                Security & Software Engineering Tracks
                <br />
                Minor: History
                <br />
              </CardContent>
            </Card>
          </Grid>
          <br />
          <Typography
            id="skills"
            variant="h5"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Relevant Skills
          </Typography>
          <UnorderedList title="Languages" list={languages} />

          <UnorderedList
            title="Technology Experience"
            list={workTechnologies}
          />

          <UnorderedList
            title="Outside Experience"
            list={outsideTechnologies}
          />

          <UnorderedList title="Classwork" list={classWork} />

          <UnorderedList title="Hobbies/Interests" list={hobbies} />

        </Box>
      </Box>
    </div>
  );
}
