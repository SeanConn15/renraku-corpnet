import React from "react";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function MainFeaturedPost(props) {
  const { post } = props;

  return (
    <Paper
      style={{ backgroundImage: `url(${post.image})` }}
    >
      {
        <img
          style={{ display: "none" }}
          src={post.image}
          alt={post.imageText}
        />
      }
      <div/>
      <Grid container spacing = {3} paddingBottom = "7%" paddingTop = "7%" paddingLeft = "5%">
        <Grid item md={10}>
          <div>
            <Typography
              component="h1"
              variant="h3"
              color="white"
              gutterBottom
            >
              {post.title}
            </Typography>
            <Typography variant="h5" color="white" paragraph>
              {post.description}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.object,
};
