import React from 'react'
import { 
 Box,
 Grid,
 makeStyles
} from "@material-ui/core";
import ArticleCard from './SearchedStoriesCard/ArticleCard'

const useStyles = makeStyles(theme => ({
  root: {
    margin: "15px",
    display: "flex",
    justifyContent: "center"
  }
}));

const SearchedArticleList = ({articles}) => {
  const classes = useStyles();
  const colWidth = {
    xs: 12,
    sm: 6,
    md: 4,
    lg: 4
  };

  

  if(articles === undefined){
    return <div>Loading</div>
  } else if( articles.length > 0) {
      return (<div className={classes.root}>
        <Box width={{ xs: "100%", md: "80%" }}>
          <Grid container spacing={3}>
              {articles.map((article, index) => {
                return (
                  <Grid item {...colWidth} key={index}>
                    <ArticleCard article={article} />
                  </Grid>
                )
              })}
          </Grid>
        </Box>
      </div>)
  } else {
     return <div>No data avaliable</div>
  }
}


export default SearchedArticleList