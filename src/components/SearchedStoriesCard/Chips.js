import React from 'react'
import { Chip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing(1),
  },
  chip: {
    margin: theme.spacing(1),
  },
}));

const Chips = (props) => {
  const classes = useStyles();
  return (
    <>
      {props.article.keywords.map((chip, index) => {
        return <Chip 
          key={index}
          className={classes.chip}
          label={chip.value}
          />
      })}
    </>
  )
}

export default Chips