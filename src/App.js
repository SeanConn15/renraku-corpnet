import React from 'react';

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
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
                <Sidebar
                  title={sidebar.title}
                  description={sidebar.description}
                  social={sidebar.social}
                />
              </Grid>
            </main>
          </Container>
          <Footer title="Attributions" description="Renraku Computer Systems is a fictional company from the tabletop game Shadowrun." />
    </ThemeProvider>
    </React.Fragment>
  );

}
