import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Movies from '../components/Movies';

const useStyles = makeStyles((theme) => ({
  tabPanel:{
    'display': 'flex',
    'flexDirection': 'column',
    'alignItems': 'center',
    'padding': '30px 0'
  }
}));

const SearchContainer = (props) =>{
  const classes = useStyles();

  return(
    <div className={classes.tabPanel}>
      <Movies searchResults={props.searchResults} />
    </div>
  )
}

export default SearchContainer;