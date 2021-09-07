import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'Mission Statement', url: '#' },
  { title: 'Resume', url: '#' },
];

const mainFeaturedPost = {
  title: 'Welcome to Renraku Computer Systems',
  description:
    "The home of all things Renraku, available straight from your Commlink.",
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Former Arcology Residents',
    date: 'Nov 12 2061',
    description:
      'Instructions for how to continue your career and lifewith renraku after the closure of the Seattle Arcology',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    title: 'Matrix Location',
    date: 'Dec 11 2045',
    description:
      'Make sure to visit our Matrix location for an AI guided tour of our company in VR.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: 'About',
  description:
    'Renraku Computer Systems serves the entirety of the sprawl with high-quality high-secuirty technological devices for anything from matrix surfing to everyday communication. We also specailize in private security, arcologies, weapons development, offensive cyber equiptment and training, hyper available data storage, and Intrusion CountermEasures, including black ICE.',
  social: [
    { name: 'GitHub', link: "https://github.com/SeanConn15", icon: GitHubIcon },
    { name: 'LinkedIn', link: "https://www.linkedin.com/in/seanconn256/", icon: LinkedInIcon},
  ],
};

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Renraku Computer Systems" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="From the firehose" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer title="Attributions" description="Renraku Computer Systems is a fictional company from the tabletop game Shadowrun." />
    </React.Fragment>
  );

}
