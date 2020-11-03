import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    'width': '100%',
    'border': '5px solid black'
  },
  title: {
    'margin': '1.5rem',
    'fontSize': '3.5rem',
    'textAlign': 'center'
  },
}));

const Title = () =>{
  const classes = useStyles();

  return(
    <div className={classes.wrapper}>
      <h1 className={classes.title}>
        React Movies App
      </h1>
    </div>
  )
}

export default Title;