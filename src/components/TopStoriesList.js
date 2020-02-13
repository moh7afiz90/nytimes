import React from 'react'
import { 
 Box,
 Grid,
 makeStyles
} from "@material-ui/core";
import ArticleCard from './ArticleCard/ArticleCard'

const useStyles = makeStyles(theme => ({
  root: {
    margin: "15px",
    display: "flex",
    justifyContent: "center"
  }
}));

const TopStoriesList = (props) => {
  const classes = useStyles();
  const colWidth = {
    xs: 12,
    sm: 6,
    md: 4,
    lg: 4
  };
  return (
    <div className={classes.root}>
      <Box width={{ xs: "100%", md: "80%" }}>
        <Grid container spacing={3}>
          {props.topStories.map((story, index) => {
            return (
              <Grid item key={index} {...colWidth}>
                <ArticleCard story={story} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  )
}

export default TopStoriesList