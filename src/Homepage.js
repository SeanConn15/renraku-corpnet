import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Sidebar from './Sidebar';



const mainFeaturedPost = {
  title: 'Welcome to Renraku Computer Systems',
  description:
    "The home of all things Renraku, available straight from your Commlink.",
  image: 'https://renraku-corpnet.com/shadowrun_skyline.jpg',
  imgText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Former Arcology Residents',
    date: 'Nov 12 2061',
    description:
      'Instructions for how to continue your career and lifewith renraku after the closure of the Seattle Arcology',
  image: 'https://renraku-corpnet.com/shadowrun_arcology.jpg',
    imageText: 'Image Text',
  },
  {
    title: 'Matrix Location',
    date: 'Dec 11 2045',
    description:
      'Find us in AR or VR at one of our many matrix locations for purchasing products and signing employment contracts.',
  image: 'https://renraku-corpnet.com/shadowrun_matrix_gate.jpg',
    imageText: 'Image Text',
  },
];


const sidebar = {
  title: 'About',
  description:
    'Renraku Computer Systems serves the entirety of the sprawl with high-quality high-secuirty technological devices for anything from matrix surfing to everyday communication. We also specailize in private security, arcologies, weapons development, offensive cyber equiptment and training, hyper available data storage, and Intrusion CountermEasures, including black ICE.',
  social: [
    { name: 'GitHub', link: "https://github.com/SeanConn15", icon: GitHubIcon },
    { name: 'LinkedIn', link: "https://www.linkedin.com/in/seanconn256/", icon: LinkedInIcon},
    { name: 'Code for this webpage', link: "https://github.com/SeanConn15/renraku-corpnet", icon: GitHubIcon},
  ],
};



export default class Main extends React.Component
{
  constructor(props) {
      super(props);
        this.state = { current_page: window.location.pathname };
  }

  render() {

      return (
              <Container maxWidth="lg">
                <main>
                  <MainFeaturedPost post={mainFeaturedPost} />
                  <Grid container spacing={4}>
                    {featuredPosts.map((post) => (
                      <FeaturedPost key={post.title} post={post} />
                    ))}
                  </Grid>
                  <Grid container spacing={5}>
                    <Sidebar
                      title={sidebar.title}
                      description={sidebar.description}
                      social={sidebar.social}
                    />
                  </Grid>
                </main>
              </Container>
      );
  }

}
