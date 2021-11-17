import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import Header from "./Header";


const sections = [{ title: "Resume", url: "/resume" }];

const mainFeaturedPost = {
  title: "Welcome to Renraku Computer Systems",
  description:
    "The home of all things Renraku, available straight from your Commlink.",
  image: "https://renraku-corpnet.com/shadowrun_skyline.jpg",
  imgText: "main image description",
};

const featuredPosts = [
  {
    title: "Former Arcology Residents",
    date: "Nov 12 2061",
    description:
      "Instructions for how to continue your career and lifewith renraku after the closure of the Seattle Arcology",
    image: "https://renraku-corpnet.com/shadowrun_arcology.jpg",
    imageText: "Image Text",
  },
  {
    title: "Matrix Location",
    date: "Dec 11 2045",
    description:
      "Find us in AR or VR at one of our many matrix locations for purchasing products and signing employment contracts.",
    image: "https://renraku-corpnet.com/shadowrun_matrix_gate.jpg",
    imageText: "Image Text",
  },
  {
  title: "About",
  description:
    "Renraku Computer Systems serves the entirety of the sprawl with high-quality high-secuirty technological devices for anything from matrix surfing to everyday communication. We also specailize in private security, arcologies, weapons development, offensive cyber equiptment and training, hyper available data storage, and Intrusion Countermeasures, including black ICE.",
  },
];

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { current_page: window.location.pathname };
  }

  render() {
    return (
      <div>
        <Header title="Renraku Computer Systems" sections={sections} />
        <Container maxWidth="lg">
          <Grid container spacing={3}
          >
            <Grid item xs={12} >
              <MainFeaturedPost post={mainFeaturedPost} />

            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={3}>
                  {featuredPosts.map((post) => (
                      <Grid item xs={12} md={6}>
                        <FeaturedPost post={post} />
                      </Grid>
                  ))}
                </Grid>
            </Grid>

        </Grid>
        </Container>
      </div>
    );
  }
}
